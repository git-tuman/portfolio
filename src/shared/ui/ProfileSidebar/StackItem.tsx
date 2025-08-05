import type { Icon } from "../../types";

const StackItem = ({ item }: { item: Icon }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <img
        src={item.icon}
        alt={`${item.name} icon`}
        className="icon"
        loading="lazy"
      />
    </a>
  );
};

export default StackItem;
