import { useState } from "react";
import DropdownArrowDown from "../../../assets/dropdown-arrow-down.svg";
import DropdownArrowTop from "../../../assets/dropdown-arrow-top.svg";
import type { Project } from "../../../shared/types";
import { VISIBLE } from "../../../shared/constants";

const Screenshots = ({ item }: { item: Project }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((s) => !s);
  };

  return (
    <div className="screenshots_container">
      <div className="screenshots_header" onClick={handleClick}>
        <span>скриншоты</span>

        <img
          src={isVisible ? DropdownArrowTop : DropdownArrowDown}
          alt="dropdown arrow"
          loading="lazy"
        />
      </div>

      <div className={`screenshots_accordion ${isVisible ? VISIBLE : ""}`}>
        <div className="screenshots_desktop">
          {item.screenshots.desktop.map((screen, index) => (
            <img
              key={index}
              src={screen}
              alt={`screen ${item.name}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="screenshots_mobile">
          {item.screenshots.mobile.map((screen, index) => (
            <img
              key={index}
              src={screen}
              alt={`screen ${item.name}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
