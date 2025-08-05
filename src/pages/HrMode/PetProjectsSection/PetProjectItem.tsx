import type { Project } from "../../../shared/types";
import HeaderProject from "./HeaderProject";
import ListDetails from "./ListDetails";
import ListStack from "./ListStack";
import Screenshots from "./Screenshots";

const PetProjectItem = ({ item }: { item: Project }) => {
  return (
    <div className="pet-project_container">
      <HeaderProject item={item} />

      <Screenshots item={item} />

      <p>{item.description}</p>

      <div>
        <h4>Стек:</h4>

        <ListStack value={item.stack} />
      </div>

      <div>
        <h4>Функционал и особенности:</h4>

        <ListDetails value={item.details} />
      </div>
    </div>
  );
};

export default PetProjectItem;
