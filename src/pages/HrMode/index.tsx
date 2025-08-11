import PageSwitcher from "../../shared/ui/PageSwitcher";
import UserProfileSection from "./UserProfileSection";
import PetProjectsSection from "./PetProjectsSection";
import PhotosSection from "./PhotosSection";

const HrMode = () => {
  return (
    <div className="hr-mode">
      <PageSwitcher />

      <div className="hr-mode_content">
        <UserProfileSection />

        <PetProjectsSection />

        <PhotosSection />
      </div>
    </div>
  );
};

export default HrMode;
