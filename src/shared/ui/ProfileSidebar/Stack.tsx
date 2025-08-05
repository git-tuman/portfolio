import { STACK_ICONS_LIST } from "../../constants";
import StackItem from "./StackItem";

const Stack = () => {
  return (
    <div className="sidebar_stack">
      <h2>Стек технологий:</h2>

      <div className="icons_list">
        {STACK_ICONS_LIST.map((item) => (
          <StackItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
