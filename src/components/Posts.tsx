import "./Posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      author: "Alex Guerrero",
      authorImg: "https://randomuser.me/api/portraits/men/1.jpg",
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 1125,
      comments: 348,
      tags: ["#Vivamus", "#suscipit"],
      content:
        "In at lacus lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor.",
    },
    {
      id: 2,
      author: "Edward Kelly",
      authorImg: "https://randomuser.me/api/portraits/men/2.jpg",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 1125,
      comments: 348,
      tags: ["#Convallis", "#commodo"],
      content:
        "In at lacus lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor.",
    },
  ];

  return (
    <div className="posts">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Recent Posts</h5>
        <div className="feeds-nav d-flex gap-3">
          <a href="#" className="text-primary fw-bold">
            Feeds
          </a>
          <a href="#" className="text-muted">
            All
          </a>
          <a href="#" className="text-muted">
            Following
          </a>
          <a href="#" className="text-muted">
            Latest
          </a>
          <a href="#" className="text-muted">
            Popular
          </a>
        </div>
      </div>

      <div className="row g-3">
        {posts.map((post) => (
          <div className="col-md-6" key={post.id}>
            <div className="card shadow-sm">
              <div className="post-img-wrapper">
                <img src={post.img} className="post-img" alt="Post" />
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/*author section*/}
                  <div className="d-flex align-items-center">
                    <img
                      src={post.authorImg}
                      alt={post.author}
                      className="rounded-circle me-3"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h6 className="mb-0">{post.author}</h6>
                  </div>
                  {/*likes and comments*/}
                  <div className="likes-comments text-muted d-flex align-items-center gap-3">
                    <span>
                      <i className="fas fa-heart me-1"></i>
                      {post.likes}
                    </span>
                    <span>
                      <i className="fas fa-comment me-1"></i>
                      {post.comments}
                    </span>
                  </div>
                </div>
                <div className="tags mb-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-primary me-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
