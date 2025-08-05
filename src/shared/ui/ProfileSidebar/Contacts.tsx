import { USER } from "../../constants";
import ContactItem from "../ContactItem";

const Contacts = () => {
  return (
    <div className="sidebar_contacts">
      <h2>Контакты:</h2>

      <div className="contacts_list">
        {USER.contacts.map((item) => (
          <ContactItem item={item} icon={true} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
