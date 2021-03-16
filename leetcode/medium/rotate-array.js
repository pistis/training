// https://leetcode.com/problems/rotate-array/
/**
 * 공간복잡도 O(1), 시간복잡도 O(N * K) === O(N^2) 
 * 이건 내가 푼거.
 * 무식하다. brute force하다. 머리좀 쓰자.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length < 2 || k === 0) {
        return;
    }

    let temp = null;
    for (let i = 0; i < k; i++) {
        temp = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }
};

// awesome !! 간단하기는 제일 간단하고 이해하기 쉽다.
// native method이지만 이 메서드도 결국 배열안의 원소를 모두 이동해야한다. k번을 반복하는 동안 각 스텝마다 내부 배열원소의 전체 이동이 되어야 한다.
// 그냥 native라서 빠른거 같다.
// https://leetcode.com/problems/rotate-array/discuss/832647/Easy-JS-Solution
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};


// awesome !! 위보다 조금 빠르다. 
// 공간복잡도 X, 시간복잡도 O(N) 와우...
// k가 nums.length보다 크더라도 한 사이클이 돌면 돌기전과 동일하다. 즉 k는 nums.length로 나눈 나머지로 해도 된다. 라는 컨셉! 머리 좋네. 이런 머리 본받자.
// 완벽한 시간 복잡도 O(nums.length), 전체 리버스 한 후, k번째를 기준으로 각각 sub array를 reverse하여 해결.
// https://leetcode.com/problems/rotate-array/discuss/558971/Faster-than-99.56-JavaScript
var rotate = function (nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

    let reverse = function (i, j) {
        while (i < j) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
    } // suppose  ----->---> 
    reverse(0, nums.length - 1); // reverse   <--<------
    reverse(0, k - 1) // reverse first part ---><----
    reverse(k, nums.length - 1)// reverse second part --->----->

};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.assert(nums1.toString() === '5,6,7,1,2,3,4');

const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.assert(nums2.toString() === '3,99,-1,-100');