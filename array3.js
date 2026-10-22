/*Given an integer array `nums`, find the subarray with the largest sum, and return
 *its sum*. can you explain this question now
 kadane algoritm with if else
 */

function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = nums[i];
        } else {
            currentSum = currentSum + nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}
nums =[-2,1,-3,4,-1,2,1,-5,4]

let k = maxSubArray(nums)
console.log(k)
