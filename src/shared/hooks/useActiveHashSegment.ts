import { useState, useEffect } from "react";

const useActiveHashSegment = () => {
  const [segment, setSegment] = useState<string>("");

  useEffect(() => {
    const getSegment = () => {
      const hash = window.location.hash.replace("#", "");
      setSegment(hash);
    };

    getSegment();

    window.addEventListener("hashchange", getSegment);
    return () => window.removeEventListener("hashchange", getSegment);
  }, []);

  return segment;
};

export default useActiveHashSegment;
