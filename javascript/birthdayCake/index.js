function birthdayCakeCandles(candles) {
  candles = candles.map(Number).sort((a, b) => a - b);
  const lastElement = candles[candles.length - 1];
  let count = candles.reduce(
    (acc, val) => (val === lastElement ? (acc += 1) : acc),
    0
  );

  return count;
}

const test = [1000, 1000, 1000, 1000];

console.log(birthdayCakeCandles(test));
