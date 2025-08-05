import type { Nav } from "../../types";

const NavigationItem = ({
  nav,
  callback,
}: {
  nav: Nav;
  callback: () => void;
}) => {
  return (
    <a href={`#${nav.id}`} onClick={callback}>
      {nav.name}
    </a>
  );
};

export default NavigationItem;
