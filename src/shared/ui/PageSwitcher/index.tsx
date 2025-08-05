import { PageSwitcherList } from "../../constants";
import React from "react";
import PageSwitcherItem from "./PageSwitcherItem";

const PageSwitcher = () => {
  return (
    <div className="page-switcher_wrapper">
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
