export function addCommas(x: number): string {
  const nairaSymbol = "\u20A6";
  return `${nairaSymbol} ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
