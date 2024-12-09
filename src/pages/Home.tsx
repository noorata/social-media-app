import Stories from "../components/Stories";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div
      className="container py-4 ps-4 pe-4 bg-light"
      style={{ minHeight: "100vh" }}
    >
      <h5 className="mb-3">Stories</h5>
      <Stories />
      <h5 className="mt-3 mb-3"></h5>
      <Posts />
    </div>
  );
};

export default Home;
