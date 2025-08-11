import { NAVIGATION_LIST } from "../../constants";
import NavigationItem from "./NavigationItem";

const Navigation = ({ callback }: { callback: () => void }) => {
  return (
    <div className="navigation">
      <h2>Навигация:</h2>

      <div className="navigation-list">
        {NAVIGATION_LIST.map((nav) => (
          <NavigationItem key={nav.id} nav={nav} callback={callback} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
