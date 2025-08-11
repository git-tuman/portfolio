import { PHOTOS } from "../../../shared/constants";
import PhotosList from "../../../shared/ui/PhotosList";

const PhotosSection = () => {
  return (
    <section id={PHOTOS}>
      <div className="photos_content">
        <h2>Мои фото:</h2>

        <PhotosList />
      </div>
    </section>
  );
};

export default PhotosSection;
