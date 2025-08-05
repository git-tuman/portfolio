import Header from "./Header";
import Stack from "./Stack";
import Navigation from "./Navigation";
import Contacts from "./Contacts";
import DropdownArrowDown from "../../../assets/dropdown-arrow-down.svg";
import { useState } from "react";
import { ACTIVE } from "../../constants";

const ProfileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((s) => !s);
  };

  return (
    <>
      <div
        className={`sidebar-toggle ${isOpen ? ACTIVE : ""}`}
        onClick={handleClick}
      >
        <img src={DropdownArrowDown} alt="sidebar arrow" className="toggle" />
      </div>

      <div className={`profile-sidebar ${isOpen ? ACTIVE : ""}`}>
        <div className="sidebar_content">
          <Header />

          <Stack />

          <Navigation callback={handleClick} />
        </div>

        <Contacts />
      </div>
    </>
  );
};

export default ProfileSidebar;
