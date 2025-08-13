import { useState } from "react";
import SymbolEL from "./SymbolEL";
import { HIDDEN, SYMBOLS, VISIBLE } from "../../../shared/constants";
import type { Screenshots } from "../../../shared/types";

const ScreenshotsDev = ({ item }: { item: Screenshots }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((s) => !s);
  };

  return (
    <div>
      <span className="screenshots-header" onClick={handleClick}>
        <h2>screenshots</h2>

        <SymbolEL symbol={SYMBOLS.colon + " "} color="white-gray" />
        <SymbolEL symbol={SYMBOLS.openingSquareBracket} color="pink" />

        <span className={`closing-symbols ${isVisible ? HIDDEN : ""}`}>
          <SymbolEL symbol={SYMBOLS.ellipsis} color="white-gray" />
          <SymbolEL symbol={SYMBOLS.closingSquareBracket} color="pink" />
          <SymbolEL symbol={SYMBOLS.comma} color="white-gray" />
        </span>
      </span>

      <div className={`accordion ${isVisible ? VISIBLE : ""}`}>
        <div className="content">
          <div className="screenshots_container">
            <div className="screenshots_desktop">
              {item.desktop.map((screen, index) => (
                <img key={index} src={screen} loading="lazy" />
              ))}
            </div>

            <div className="screenshots_mobile">
              {item.mobile?.map((screen, index) => (
                <img key={index} src={screen} loading="lazy" />
              ))}
            </div>
          </div>
        </div>

        <div>
          <SymbolEL symbol={SYMBOLS.closingSquareBracket} color="pink" />
          <SymbolEL symbol={SYMBOLS.comma} color="white-gray" />
        </div>
      </div>
    </div>
  );
};

export default ScreenshotsDev;
