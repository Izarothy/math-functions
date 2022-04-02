export function lineLength([x1, y1]: number[], [x2, y2]: number[]): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function pointBetween([x1, y1]: number[], [x2, y2]: number[]): number[] {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}

export function perpendicularBisector(
  [x1, y1]: number[],
  [x2, y2]: number[]
): string {
  let a1 = 1;

  // We have X and Y for both, therefore we can find a and b (Y = a*X + b)

  // Solve a system of equations where a is the preferred unknown to find
  const systemEqOne = y1 - y2; // left part
  const systemEqTwo = x1 - x2; // right part

  a1 = systemEqOne / systemEqTwo;

  const [x3, y3] = pointBetween([x1, y1], [x2, y2]);

  // y3 = a * x3 + b;

  // We can find A3 through the law that perpendicular bisectors' A values, when multiplied, give -1
  // a1 * a3 = -1;
  const a3 = -1 / a1;

  // y3 = a3 * x3 + b;

  const b3 = y3 - a3 * x3;

  // If B is negative, it'll just print -b3 instead of +-b3

  if (b3 < 0) return `y = ${a3}x ${b3}`;

  return `y = ${a3}x + ${b3}`;
}
