import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPost } from "../posts-api";

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(5, "Description must be at least 5 characters"),
  author: Yup.string().required("Author is required"),
});

interface NewPostProps {
  onPostCreated: () => void;
  onClose: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ onPostCreated, onClose }) => {
  const handleSubmit = async (values: {
    title: string;
    description: string;
    author: string;
  }) => {
    try {
      const newPost = {
        id: Date.now(),
        ...values,
        dateCreated: new Date().toISOString(),
        status: "draft" as "draft",
        likes: 0,
        comments: 0,
        tags: [] as string[],
        authorImg: "https://randomuser.me/api/portraits/men/1.jpg",
        img: "",
        content: "",
      };

      await addPost(newPost);
      toast.success("Post created successfully!");
      onPostCreated();
      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Create New Post</h2>

      <Formik
        initialValues={{ title: "", description: "", author: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="shadow p-4 bg-light rounded">
            <fieldset className="mb-3">
              <legend>Post Details</legend>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter post title"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="form-control"
                  placeholder="Enter description"
                  rows={3}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <Field
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder="Enter author name"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-danger"
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Post"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPost;
