import PageSwitcher from "../../shared/ui/PageSwitcher";

const DevMode = () => {
  return (
    <div className="dev-mode">
      <PageSwitcher />

      <div className="dev-mode_content">
        {/* <UserInfoSection />

        <PetProjectsSection />

        <PhotosSection /> */}
      </div>
    </div>
  );
};

export default DevMode;
