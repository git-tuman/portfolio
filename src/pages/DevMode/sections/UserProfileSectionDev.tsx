import { USER, USER_PROFILE } from "../../../shared/constants";
import useActiveHashSegment from "../../../shared/hooks/useActiveHashSegment";
import AccordionSection from "./AccordionSection";
import KeyNestedObjEl from "../components/KeyNestedObjEl";
import KeyValueEl from "../components/KeyValueEl";

const UserProfileSectionDev = () => {
  const activeHashSegment = useActiveHashSegment();

  return (
    <AccordionSection
      id={USER}
      name="USER_PROFILE"
      variant="obj"
      activeHashSegment={activeHashSegment}
      defaultActive={true}
    >
      <KeyValueEl name="name" value={USER_PROFILE.name} />
      <KeyValueEl name="details" value={USER_PROFILE.details} />
      <KeyValueEl name="message" value={USER_PROFILE.message} />
      <KeyValueEl name="stack" value={USER_PROFILE.stack} />
      <KeyValueEl name="bio" value={USER_PROFILE.bio} />

      <KeyNestedObjEl name="contacts" nestedValue={USER_PROFILE.contacts} />
    </AccordionSection>
  );
};

export default UserProfileSectionDev;
