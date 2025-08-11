import { PHOTOS } from "../../../shared/constants";
import useActiveHashSegment from "../../../shared/hooks/useActiveHashSegment";
import PhotosList from "../../../shared/ui/PhotosList";
import AccordionSection from "./AccordionSection";

const PhotosSectionDev = () => {
  const activeHashSegment = useActiveHashSegment();

  return (
    <AccordionSection
      id={PHOTOS}
      name="PHOTOS_LIST"
      variant="arr"
      activeHashSegment={activeHashSegment}
    >
      <PhotosList />
    </AccordionSection>
  );
};

export default PhotosSectionDev;
