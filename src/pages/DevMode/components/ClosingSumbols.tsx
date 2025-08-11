import { HIDDEN, SYMBOLS } from "../../../shared/constants";
import SymbolEL from "./SymbolEL";

const ClosingSumbols = ({
  variant,
  isHidden,
}: {
  variant: "obj" | "arr";
  isHidden: boolean;
}) => {
  return (
    <span className={`closing-symbols ${isHidden ? HIDDEN : ""}`}>
      {variant === "obj" && (
        <SymbolEL symbol={SYMBOLS.closingCurlyBrace} color="pink" />
      )}
      {variant === "arr" && (
        <SymbolEL symbol={SYMBOLS.closingSquareBracket} color="pink" />
      )}
      <SymbolEL symbol={SYMBOLS.semicolon} color="white-gray" />
    </span>
  );
};

export default ClosingSumbols;
