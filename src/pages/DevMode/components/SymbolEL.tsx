const SymbolEL = ({ symbol, color }: { symbol: string; color: string }) => {
  return <span className={color}>{symbol}</span>;
};

export default SymbolEL;
