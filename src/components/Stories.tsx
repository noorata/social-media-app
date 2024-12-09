const Stories = () => {
  const stories = [
    {
      name: "Laura Quinn",
      img: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
      isLive: true,
    },
    {
      name: "Michael Daws",
      img: "https://images.unsplash.com/photo-1680629278856-e06102e9eb9a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
      isLive: false,
    },
    {
      name: "Julian Fox",
      img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHdvbWFuJTJDZGVzaWdufGVufDB8fHx8MTY4OTAzMzAxMQ&ixlib=rb-4.0.3&q=80&w=400",
      profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
      isLive: false,
    },
    {
      name: "Anna Lee",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGZhc2hpb24lMkNwb3J0cmFpdHxlbnwwfHx8fDE2ODkwMzMwMTE&ixlib=rb-4.0.3&q=80&w=400",
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
      isLive: false,
    },
    {
      name: "Julian Fox",
      img: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
      isLive: false,
    },
    {
      name: "Anna Lee",
      img: "https://images.unsplash.com/photo-1529040181623-e04ebc611e25?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
      isLive: false,
    },
    
  ];

  return (
    <div className="d-flex align-items-center gap-3 overflow-auto py-3">
      {stories.map((story, index) => (
        <div
          key={index}
          className="story-item card border-0"
          style={{ width: "130px", position: "relative" }}
        >
          {/*story image*/}
          <img
            src={story.img}
            alt={story.name}
            className="card-img-top rounded"
            style={{ height: "180px", objectFit: "cover" }}
          />
          {story.isLive && (
            <span
              className="position-absolute top-0 start-0 bg-danger text-white px-2 small rounded"
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                margin: "5px",
              }}
            >
              LIVE
            </span>
          )}
          {/*profile icon and name*/}
          <div
            className="d-flex align-items-center position-absolute bottom-0 start-0 p-2"
            style={{
              // background: "rgba(0, 0, 0, 0.5)",
              fontSize: "14px",
              width: "100%",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <img
              src={story.profileImg}
              alt={`${story.name}'s profile`}
              className="rounded-circle me-2"
              style={{
                width: "30px",
                height: "30px",
                border: "2px solid white",
              }}
            />
            <span className="text-white small">{story.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
