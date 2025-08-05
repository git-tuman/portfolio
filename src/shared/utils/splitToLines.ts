function splitToLines(str: string) {
  const words = str.split(" ");
  return {
    firstLine: words.slice(0, -3).join(" "),
    lastLine: words.slice(-3).join(" "),
  };
}

export default splitToLines;
