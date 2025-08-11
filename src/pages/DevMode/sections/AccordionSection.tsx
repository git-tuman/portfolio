import { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import { VISIBLE } from "../../../shared/constants";
import ClosingSumbols from "../components/ClosingSumbols";

type AccordionSectionProps = {
  id: string;
  name: string;
  variant: "obj" | "arr";
  children: React.ReactNode;
  defaultActive?: boolean;
  activeHashSegment: string;
};

const AccordionSection = ({
  id,
  name,
  variant,
  children,
  defaultActive = false,
  activeHashSegment,
}: AccordionSectionProps) => {
  const [isActive, setIsActive] = useState(defaultActive);

  useEffect(() => {
    if (activeHashSegment === id) {
      setIsActive(true);
    }
  }, [activeHashSegment, id]);

  return (
    <section id={id}>
      <HeaderSection
        name={name}
        isActive={isActive}
        callback={() => setIsActive((s) => !s)}
        variant={variant}
      />

      <div className={`accordion ${isActive ? VISIBLE : ""}`}>
        <div className="content">{children}</div>
        <ClosingSumbols variant={variant} isHidden={!isActive} />
      </div>
    </section>
  );
};

export default AccordionSection;
