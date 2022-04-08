import Fraction from 'fraction.js';

export const lineLength = ([x1, y1]: number[], [x2, y2]: number[]): number =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

export const pointBetween = (
  [x1, y1]: number[],
  [x2, y2]: number[]
): number[] => [(x1 + x2) / 2, (y1 + y2) / 2];

export const perpendicularBisector = (A: number[], B: number[]): string => {
  const [x1, y1] = A;
  const [x2, y2] = B;

  let a1 = 1;

  // We have X and Y for both, therefore we can find a and b (Y = a*X + b)

  // Solve a system of equations where a is the preferred unknown to find
  const systemEqOne: number = y1 - y2; // left part
  const systemEqTwo: number = x1 - x2; // right part

  a1 = systemEqOne / systemEqTwo;

  const [x3, y3]: number[] = pointBetween([x1, y1], [x2, y2]);

  // y3 = a * x3 + b;

  // We can find A3 through the law that perpendicular bisectors' A values, when multiplied, give -1
  // a1 * a3 = -1;
  const a3: number = -1 / a1;

  // y3 = a3 * x3 + b;

  const b3: number = y3 - a3 * x3;

  // If B is negative, it'll just print -b3 instead of +-b3

  if (b3 < 0) return `y = ${a3}x ${b3}`;

  const fractA = new Fraction(a3);
  const fractB = new Fraction(b3);

  return `y = ${fractA.toFraction(true)}x + ${fractB.toFraction(true)}`;
};

export const pointToLineDistance = (
  [A, B, C]: number[],
  [x, y]: number[]
): number => {
  // Formula for the distance is (abstract of A * x + B * y + C) divided by a square root of (A^2 + B^2)

  const distance = Math.abs(A * x + B * y + C) / Math.sqrt(A ** 2 + B ** 2);

  // since toFixed makes it a string, we have to convert it back.
  return Number(distance.toFixed(2));
};
