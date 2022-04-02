export function lineLength(A: number[], B: number[]): number {
  return Math.sqrt((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2);
}

export function pointBetween(A: number[], B: number[]): number[] {
  return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
}
