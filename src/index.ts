export function lineLength(A: number[], B: number[]) {
  return Math.sqrt(Math.pow(B[0] - A[0], 2) + Math.pow(B[1] - A[1], 2));
}
