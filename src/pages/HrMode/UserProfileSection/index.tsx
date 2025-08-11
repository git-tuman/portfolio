import { USER, USER_PROFILE } from "../../../shared/constants";
import splitToLines from "../../../shared/utils/splitToLines";
import BlockInfo from "./BlockInfo";

const UserProfileSection = () => {
  const { firstLine, lastLine } = splitToLines(USER_PROFILE.message);

  return (
    <section id={USER} className="user-profile-section">
      <p>
        {firstLine + " "}
        <span className="accent">{lastLine}</span>
      </p>

      <BlockInfo name="Мой стек:" value={USER_PROFILE.stack} />

      <BlockInfo name="Обо мне:" value={USER_PROFILE.bio} />

      <BlockInfo name="Мои контакты:" value={USER_PROFILE.contacts} />
    </section>
  );
};

export default UserProfileSection;
