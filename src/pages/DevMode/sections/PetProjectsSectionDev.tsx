import React from "react";
import {
  PET_PROJECTS,
  PET_PROJECTS_LIST,
  SYMBOLS,
} from "../../../shared/constants";
import useActiveHashSegment from "../../../shared/hooks/useActiveHashSegment";
import AccordionSection from "./AccordionSection";
import SymbolEL from "../components/SymbolEL";
import KeyValueEl from "../components/KeyValueEl";
import ScreenshotsDev from "../components/ScreenshotsDev";

const PetProjectsSectionDev = () => {
  const activeHashSegment = useActiveHashSegment();

  return (
    <AccordionSection
      id={PET_PROJECTS}
      name="PROJECTS_LIST"
      variant="arr"
      activeHashSegment={activeHashSegment}
    >
      {PET_PROJECTS_LIST.map((item, index) => (
        <React.Fragment key={index}>
          <SymbolEL symbol={SYMBOLS.openingCurlyBrace} color="orange" />

          <div className="content">
            <KeyValueEl name="name" value={item.name} />
            <KeyValueEl name="deploy" value={item.deploy} />
            <KeyValueEl name="repo" value={item.repo} />

            <ScreenshotsDev item={item.screenshots} />

            <KeyValueEl name="description" value={item.description} />
            <KeyValueEl name="stack" value={item.stack} />
            <KeyValueEl name="details" value={item.details} />
          </div>

          <div>
            <SymbolEL symbol={SYMBOLS.closingCurlyBrace} color="orange" />
            <SymbolEL symbol={SYMBOLS.comma} color="white-gray" />
          </div>
        </React.Fragment>
      ))}
    </AccordionSection>
  );
};

export default PetProjectsSectionDev;
