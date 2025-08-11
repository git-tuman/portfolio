import { HIDDEN, PageSwitcherList } from "../../constants";
import React, { useEffect, useRef, useState } from "react";
import PageSwitcherItem from "./PageSwitcherItem";

const PageSwitcher = () => {
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setIsHidden(lastScrollY.current < scrollY ? true : false);
    lastScrollY.current = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`page-switcher_wrapper ${isHidden ? HIDDEN : ""}`}>
      <div className="page-switcher_container">
        {PageSwitcherList.map((item, index) => (
          <React.Fragment key={index}>
            <PageSwitcherItem item={item} />

            {index < PageSwitcherList.length - 1 && (
              <span className="divider">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PageSwitcher;
