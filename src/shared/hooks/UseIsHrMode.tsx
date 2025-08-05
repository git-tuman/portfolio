import { useLocation } from "react-router-dom";
import { HR_MODE_PATCH } from "../constants";

const UseIsHrMode = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath === HR_MODE_PATCH;
};

export default UseIsHrMode;
