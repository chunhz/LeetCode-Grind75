/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //   /*
  // DP
  // dp[i] represents the total number of different ways to take i steps
  // So, we want to get dp[n].
  // n = 3, 1 1 1, 1 2, 2 1,
  // n = 4, 1111, 112, 121, 211, 22
  // dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.
  // We have two base cases: dp[1] = 1 and dp[2] = 2 because
  // there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
  // */
  let dp = [n + 1];
  dp[1] = 1;
  dp[2] = 2;
  // starting from step 3
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // starting from dp[2], dp[1]
    console.log('dp[i]', dp[i], dp[i - 1], dp[i - 2]);
  }
  return dp[n];
  // T.C: O(N)
  // S.C: O(N)
};
// const climbStairs = (n) => {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
console.log(climbStairs(35));
