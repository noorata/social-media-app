import React, { useState } from "react";
import Lottie from "react-lottie-player";
import { Howl } from "howler";
import { db } from "./firebase"; // Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import successAnimation from "./assets/animation/success.json";
import goodAnimation from "./assets/animation/good.json";
import confusedAnimation from "./assets/animation/confused.json";
import ideaAnimation from "./assets/animation/idea.json";
import "./assets/styles/RateMyProject.scss";

const reactionSound = new Howl({
  src: ["sounds/reaction.mp3"],
  volume: 0.5,
});

const RateMyProject: React.FC = () => {
  const [reaction, setReaction] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const defaultAnimation = successAnimation;

  const getAnimation = () => {
    switch (reaction) {
      case "🎉":
        return successAnimation;
      case "😊":
        return goodAnimation;
      case "🤔":
        return confusedAnimation;
      case "💡":
        return ideaAnimation;
      default:
        return defaultAnimation;
    }
  };

  const handleReactionClick = (reactionType: string) => {
    setReaction(reactionType);
    reactionSound.play();
  };

  const handleSubmit = async () => {
    if (!reaction || !feedback) {
      setError("Please select a reaction and provide feedback.");
      return;
    }
    setError(null);
    setSubmitted(true);

    try {
      await addDoc(collection(db, "feedback"), {
        reaction,
        feedback,
        createdAt: new Date(),
      });
      console.log("Feedback submitted successfully!");
    } catch (err) {
      console.error("Error saving feedback:", err);
      setError("Failed to save feedback. Please try again later.");
      setSubmitted(false);
    }
  };

  return (
    <div className="rate-my-project">
      <div className="container text-center">
        <h1 className="heading">🎯 What do you think about my project?</h1>

        {submitted ? (
          <div className="thank-you-section">
            <Lottie
              loop={false}
              animationData={getAnimation()}
              play
              style={{ width: 300, height: 300, margin: "0 auto" }}
            />
            <h2 className="text-success">🎉 Thank you for your feedback!</h2>
            <p>Your opinion matters a lot! 🌟</p>
          </div>
        ) : (
          <div className="feedback-section">
            {error && <p className="error-message">{error}</p>}

            <h3>React with an emoji! ✨</h3>
            <div className="reactions">
              {["🎉", "😊", "🤔", "💡"].map((emoji) => (
                <button
                  key={emoji}
                  className={`reaction-button ${reaction === emoji ? "active" : ""}`}
                  onClick={() => handleReactionClick(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>

            <h3 className="mt-4">Leave a comment or suggestion 📝</h3>
            <textarea
              className="feedback-textarea"
              rows={4}
              placeholder="Your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <button className="submit-button" onClick={handleSubmit}>
              Submit Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RateMyProject;
