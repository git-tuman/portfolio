import { PHOTOS } from "../../../shared/constants";

const PhotosSection = () => {
  return (
    <section id={PHOTOS} className="photos-section">
      <div>
        <h2>Мои фото:</h2>

        {/* {PHOTOS_LIST.map((photo, index) => (
          <img key={index} src={photo} alt="my photo" loading="lazy" />
        ))} */}
      </div>
    </section>
  );
};

export default PhotosSection;
