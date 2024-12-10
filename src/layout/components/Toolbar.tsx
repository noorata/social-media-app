import "../../assets/styles/Toolbar.scss";

const Toolbar: React.FC = () => {
  return (
    <div className="d-flex align-items-center gap-3">
      {/*user icon*/}
      <a href="#" className="text-dark fs-5">
        <i className="fas fa-user"></i>
      </a>

      {/*envelope icon */}
      <a href="#" className="text-dark fs-5">
        <i className="fas fa-envelope"></i>
      </a>

      {/*bell icon*/}
      <a href="#" className="text-dark fs-5">
        <i className="fas fa-bell"></i>
      </a>

      {/*profile picture*/}
      <div className="rounded-circle overflow-hidden profile-picture">
        <img
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="Profile"
          className="img-fluid w-100 h-100 object-cover"
        />
      </div>
    </div>
  );
};

export default Toolbar;
