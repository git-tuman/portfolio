import { useState } from "react";
import Toast from "./Toast";
import type { Link } from "../types";

const ContactItem = ({ item, icon }: { item: Link; icon: boolean }) => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!item.link) {
      e.preventDefault();
      navigator.clipboard.writeText(item.value);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    }
  };

  return (
    <>
      {!icon && (
        <p>
          {item.name + ": "}

          <a
            href={item.link || "#"}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            onClick={handleClick}
          >
            {item.value}
          </a>
        </p>
      )}

      {icon && (
        <a
          href={item.link || "#"}
          target={item.link ? "_blank" : undefined}
          rel={item.link ? "noopener noreferrer" : undefined}
          onClick={handleClick}
        >
          <img src={item.icon} alt={`${item.name} icon`} loading="lazy" />
        </a>
      )}

      <Toast text="Скопировано в буфер обмена" visible={toastVisible} />
    </>
  );
};

export default ContactItem;
