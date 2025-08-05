import PageSwitcher from "../../shared/ui/PageSwitcher";
import UserInfoSection from "./UserInfoSection";
import PetProjectsSection from "./PetProjectsSection";
import PhotosSection from "./PhotosSection";

const HrMode = () => {
  return (
    <div className="hr-mode">
      <PageSwitcher />

      <div className="hr-mode_content">
        <UserInfoSection />

        <PetProjectsSection />

        <PhotosSection />
      </div>
    </div>
  );
};

export default HrMode;
