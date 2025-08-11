import { USER_PROFILE } from "../../constants";
import ContactItem from "../ContactItem";

const Contacts = () => {
  return (
    <div className="sidebar_contacts">
      <h2>Контакты:</h2>

      <div className="contacts_list">
        {USER_PROFILE.contacts.map((item) => (
          <ContactItem key={item.name} item={item} icon={true} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
