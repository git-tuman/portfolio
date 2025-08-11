import { PHOTOS_LIST } from "../constants";

const PhotosList = () => {
  return (
    <div className="photos_list">
      {PHOTOS_LIST.map((photo, index) => (
        <img key={index} src={photo} alt="my photo" loading="lazy" />
      ))}
    </div>
  );
};

export default PhotosList;
