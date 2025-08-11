import { AVATAR, USER_PROFILE } from "../../constants";

const Header = () => {
  return (
    <div className="sidebar_header">
      <img
        src={AVATAR}
        alt="avatar"
        className="sidebar_avatar"
        loading="lazy"
      />

      <div className="sidebar_details">
        <h1>{USER_PROFILE.name}</h1>

        <p>{USER_PROFILE.details}</p>
      </div>
    </div>
  );
};

export default Header;
