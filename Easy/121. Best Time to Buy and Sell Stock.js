/**
 * @param {number[]} prices
 * @return {number}
 * Input: prices = [7,1,5,3,6,4]
Output: 5
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */
const maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxPrice = Number.MIN_VALUE;
  let maxP = 0;
  // let maxPrice
  for (const i of prices) {
    maxPrice = Number.MIN_VALUE;
    if (i < minPrice) {
      minPrice = i;
    }
    if (i > maxPrice) {
      maxPrice = i;
    }
    if (maxPrice - minPrice > maxP) { maxP = maxPrice - minPrice; }
    //  console.log('mix',maxPrice)
    //  console.log('min',minPrice)
  }
  return maxPrice - minPrice;
};
console.log(maxProfit(
  [7, 6, 4, 3, 1],
));
