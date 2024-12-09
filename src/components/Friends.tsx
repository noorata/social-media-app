import "./Friends.scss";

const Friends = () => {
  const friends = [
    {
      name: "Alex Guerrero",
      time: "10 min",
      isOnline: true,
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sara Mendoza",
      time: "now",
      isOnline: true,
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Ronald Roberts",
      time: "7 min",
      isOnline: false,
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Nancy Lee",
      time: "12 min",
      isOnline: true,
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Marie Jackson",
      time: "7 min",
      isOnline: false,
      img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Nick Powell",
      time: "now",
      isOnline: true,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Alex Freeman",
      time: "20 min",
      isOnline: false,
      img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Sandra Rivera",
      time: "now",
      isOnline: true,
      img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Jerry Jordan",
      time: "30 min",
      isOnline: false,
      img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const groups = [
    {
      name: "Kelly Powell",
      time: "1hr",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  return (
    <div className="friends-section bg-white rounded shadow-sm p-3">
      {/*Search Bar*/}
      <div className="search-bar mb-4 d-flex align-items-center">
        <input
          type="search"
          className="form-control flex-grow-1 rounded-pill"
          placeholder="Search..."
          aria-label="Search"
        />
        <i className="fas fa-search ms-2 text-muted"></i>
      </div>

      {/*friends section*/}
      <h6 className="friends-title text-uppercase text-muted mb-3">Friends</h6>
      <div className="friends-list mb-4">
        {friends.map((friend, index) => (
          <div
            className="friend-item d-flex align-items-center justify-content-between mb-3"
            key={index}
          >
            {/*friend details*/}
            <div className="d-flex align-items-center">
              <div className="friend-avatar">
                <img
                  src={friend.img}
                  alt={friend.name}
                  className="rounded-circle border"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </div>
              <div className="friend-info ms-3">
                <h6 className="mb-0">{friend.name}</h6>
              </div>
            </div>

            {/*status*/}
            {friend.time === "now" ? (
              <div
                className="status-indicator-circle"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#0d6efd",
                  borderRadius: "50%",
                }}
              ></div>
            ) : (
              <small className="text-muted">{friend.time}</small>
            )}
          </div>
        ))}
      </div>

      {/*groups section*/}
      <h6 className="friends-title text-uppercase text-muted mb-3">Groups</h6>
      <div className="groups-list">
        {groups.map((group, index) => (
          <div
            className="friend-item d-flex align-items-center justify-content-between mb-3"
            key={index}
          >
            {/*group avatar*/}
            <div className="d-flex align-items-center">
              <img
                src={group.img}
                alt={group.name}
                className="rounded-circle border"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <div className="friend-info ms-3">
                <h6 className="mb-0">{group.name}</h6>
              </div>
            </div>
            {group.time && <small className="text-muted">{group.time}</small>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
