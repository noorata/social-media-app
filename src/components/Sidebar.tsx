import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-white text-black p-3 shadow-sm"
      style={{ width: "250px", height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li className="py-2 px-3 d-flex align-items-center">
          <i className="fas fa-home me-2"></i>
          <Link to="/" className="text-black text-decoration-none">Feed</Link>
        </li>
        <li className="py-2 px-3 d-flex align-items-center">
          <i className="fas fa-user-friends me-2"></i>
          <Link to="/friends" className="text-black text-decoration-none">Friends</Link>
        </li>
        <li className="py-2 px-3 d-flex align-items-center">
          <i className="fas fa-calendar-alt me-2"></i>
          <Link to="/events" className="text-black text-decoration-none">Event</Link>
        </li>
        <li className="py-2 px-3 d-flex align-items-center">
          <i className="fas fa-photo-video me-2"></i>
          <Link to="/videos" className="text-black text-decoration-none">Watch Videos</Link>
        </li>
        <li className="py-2 px-3 d-flex align-items-center">
          <i className="fas fa-file me-2"></i>
          <Link to="/files" className="text-black text-decoration-none">Files</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
