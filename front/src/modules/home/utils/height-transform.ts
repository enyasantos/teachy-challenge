export function heightTransform(height: string): string {
  const numericValue = parseInt(height, 10);
  const integerPart = Math.floor(numericValue / 100);
  const decimalPart = numericValue % 100;
  return `${integerPart},${decimalPart.toString().padStart(2, "0")}m`;
}
