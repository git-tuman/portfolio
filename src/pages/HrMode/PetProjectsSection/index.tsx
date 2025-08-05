import { PET_PROJECTS, PET_PROJECTS_LIST } from "../../../shared/constants";
import PetProjectItem from "./PetProjectItem";

const PetProjectsSection = () => {
  return (
    <section id={PET_PROJECTS} className="pet-projects-section">
      <h2 className="accent">Пет-проекты:</h2>

      {PET_PROJECTS_LIST.map((item) => (
        <PetProjectItem key={item.name} item={item} />
      ))}
    </section>
  );
};

export default PetProjectsSection;
