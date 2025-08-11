import { SYMBOLS } from "../../../shared/constants";
import type { Link } from "../../../shared/types";
import KeyValueEl from "./KeyValueEl";
import SymbolEL from "./SymbolEL";

const KeyNestedObjEl = ({
  name,
  nestedValue,
}: {
  name: string;
  nestedValue: Link[];
}) => {
  return (
    <div>
      <h2>{name}</h2>

      <SymbolEL symbol={SYMBOLS.colon + " "} color="white-gray" />
      <SymbolEL symbol={SYMBOLS.openingCurlyBrace} color="orange" />

      <div className="content">
        {nestedValue.map((item) => (
          <KeyValueEl key={item.name} name={item.name} value={item} />
        ))}
      </div>

      <SymbolEL symbol={SYMBOLS.closingCurlyBrace} color="orange" />
      <SymbolEL symbol={SYMBOLS.comma} color="white-gray" />
    </div>
  );
};

export default KeyNestedObjEl;
