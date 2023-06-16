import numeral from "numeral";

export function fNumber(number: number) {
  return numeral(number).format();
}
