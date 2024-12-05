import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div>
      <h1>Stories</h1>
      <Stories />
      <h1>Recent Posts</h1>
      <Posts />
    </div>
  );
};

export default Home;
