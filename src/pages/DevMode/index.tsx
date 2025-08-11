import PageSwitcher from "../../shared/ui/PageSwitcher";
import PetProjectsSectionDev from "./sections/PetProjectsSectionDev";
import PhotosSectionDev from "./sections/PhotosSectionDev";
import UserProfileSectionDev from "./sections/UserProfileSectionDev";

const DevMode = () => {
  return (
    <div className="dev-mode">
      <PageSwitcher />

      <div className="dev-mode_content">
        <UserProfileSectionDev />

        <PetProjectsSectionDev />

        <PhotosSectionDev />
      </div>
    </div>
  );
};

export default DevMode;
