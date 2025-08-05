import type { Link } from "../../../shared/types";
import ContactItem from "../../../shared/ui/ContactItem";

const BlockInfo = ({
  name,
  value,
}: {
  name: string;
  value: string | Link[];
}) => {
  return (
    <div>
      <h2>{name}</h2>

      {Array.isArray(value) ? (
        value.map((item) => <ContactItem item={item} icon={false} />)
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};

export default BlockInfo;
