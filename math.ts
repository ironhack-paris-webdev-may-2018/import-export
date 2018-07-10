// contains math functions
export function secondPower(x: number): number {
  return x * x;
}

export function sum(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  return a / b;
}

export function randomInteger(max: number): number {
  return Math.floor(Math.random() * max);
}
