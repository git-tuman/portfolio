import { Ava, USER } from "../../constants";

const Header = () => {
  return (
    <div className="sidebar_header">
      <img src={Ava} alt="avatar" className="sidebar_avatar" loading="lazy" />

      <div className="sidebar_details">
        <h1>{USER.name}</h1>

        <p>{USER.details}</p>
      </div>
    </div>
  );
};

export default Header;
