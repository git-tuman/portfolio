import { useLocation, useNavigate } from "react-router-dom";
import type { PageSwitcherType } from "../../types";
import { ACTIVE } from "../../constants";

const PageSwitcherItem = ({ item }: { item: PageSwitcherType }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(item.path);
  };

  return (
    <button
      className={`page-switcher_button ${
        currentPath === item.path ? ACTIVE : ""
      }`}
      onClick={handleClick}
    >
      {item.name}
    </button>
  );
};

export default PageSwitcherItem;
