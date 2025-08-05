import { USER, USER_INFO } from "../../../shared/constants";
import splitToLines from "../../../shared/utils/splitToLines";
import BlockInfo from "./BlockInfo";

const UserInfoSection = () => {
  const { firstLine, lastLine } = splitToLines(USER.message);

  return (
    <section id={USER_INFO} className="user-info-section">
      <h2>
        {firstLine + " "}
        <span className="accent">{lastLine}</span>
      </h2>

      <BlockInfo name="Мой стек:" value={USER.stack} />

      <BlockInfo name="Обо мне:" value={USER.bio} />

      <BlockInfo name="Мои контакты:" value={USER.contacts} />
    </section>
  );
};

export default UserInfoSection;
