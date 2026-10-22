import { MinPriorityQueue } from "@datastructures-js/priority-queue";
function findKthLargest(nums, k) {
  // Create an empty min-priority queue
  const heap = new MinPriorityQueue(); 

  // Go through each number in the array
  for (let i = 0; i < nums.length ; i++) {
    const num = nums[i]
    // Add the number to the priority queue
    heap.enqueue(num);

    // If the queue has more than k elements
    if (heap.size() > k) {
      // Remove the smallest element
      heap.dequeue();
    }
  }

  // After the loop, the queue has the k largest elements
  // The smallest of these (at the front) is the kth largest
  return heap.front();
}

const nums = [3,2,1,5,6,4]
const k = 2

const l = findKthLargest(nums,k)
console.log(l)

// heap question
