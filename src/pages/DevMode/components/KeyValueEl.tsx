import { useEffect, useRef, useState } from "react";
import SymbolEL from "./SymbolEL";
import { SYMBOLS } from "../../../shared/constants";
import type { Link } from "../../../shared/types";
import Toast from "../../../shared/ui/Toast";

const KeyValueEl = ({
  name,
  value,
}: {
  name: string;
  value: string | Link;
}) => {
  const isObject = typeof value === "object" && value !== null;

  const ref = useRef<HTMLSpanElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsOverflow(ref.current.getClientRects().length > 1);
    }
  }, []);

  const [toastVisible, setToastVisible] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof value !== "string" && !value.link) {
      e.preventDefault();
      navigator.clipboard.writeText(value.value);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    }
  };

  return (
    <div>
      <h2>{name}</h2>

      <SymbolEL symbol={SYMBOLS.colon + " "} color="white-gray" />
      <SymbolEL
        symbol={isOverflow ? SYMBOLS.singleQuote : SYMBOLS.quote}
        color={isOverflow ? "pink" : "white-gray"}
      />

      <span ref={ref} className={isOverflow ? "content" : ""}>
        {isObject ? (
          <a
            href={value.link || "#"}
            target={value.link ? "_blank" : undefined}
            rel={value.link ? "noopener noreferrer" : undefined}
            onClick={handleClick}
          >
            {value.value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </span>

      <SymbolEL
        symbol={isOverflow ? SYMBOLS.singleQuote : SYMBOLS.quote}
        color={isOverflow ? "pink" : "white-gray"}
      />
      <SymbolEL symbol={SYMBOLS.comma} color="white-gray" />

      <Toast text="Скопировано в буфер обмена" visible={toastVisible} />
    </div>
  );
};

export default KeyValueEl;
