import { perpendicularBisector } from '../src/index';

test('Basic values test', () => {
  const [A1, B1] = [
    [5, 0],
    [1, 1],
  ];

  const [A2, B2] = [
    [3, 0],
    [5, 7],
  ];

  const [A3, B3] = [
    [0, 0],
    [5, 3],
  ];

  expect(perpendicularBisector(A1, B1)).toBe('y = 4x -11.5');

  expect(perpendicularBisector(A2, B2)).toBe('y = -2/7x + 4 9/14');

  expect(perpendicularBisector(A3, B3)).toBe('y = -1 2/3x + 5 2/3');
});
