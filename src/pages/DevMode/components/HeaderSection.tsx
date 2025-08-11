import { HIDDEN, SYMBOLS } from "../../../shared/constants";
import ClosingSumbols from "./ClosingSumbols";
import SymbolEL from "./SymbolEL";

const HeaderSection = ({
  name,
  isActive,
  callback,
  variant,
}: {
  name: string;
  isActive: boolean;
  callback: () => void;
  variant: "obj" | "arr";
}) => {
  return (
    <div onClick={callback} className="header">
      <span className="pink">export </span>
      <span className="purple">{name.toLocaleUpperCase()} </span>

      <span>
        <SymbolEL symbol={SYMBOLS.equal} color="pink" />{" "}
        {variant === "obj" && (
          <SymbolEL symbol={SYMBOLS.openingCurlyBrace} color="pink" />
        )}
        {variant === "arr" && (
          <SymbolEL symbol={SYMBOLS.openingSquareBracket} color="pink" />
        )}
      </span>

      <span className={`closing-symbols ${isActive ? HIDDEN : ""}`}>
        <SymbolEL symbol={SYMBOLS.ellipsis} color="white-gray" />
      </span>

      <ClosingSumbols variant={variant} isHidden={isActive} />
    </div>
  );
};

export default HeaderSection;
