```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Cursor = m - 1;
  let nums2Cursor = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    let numA = nums1Cursor >= 0 ? nums1[nums1Cursor] : -Infinity;
    let numB = nums2Cursor >= 0 ? nums2[nums2Cursor] : -Infinity;
    if (numA > numB) {
      nums1[i] = numA;
      nums1Cursor--;
    } else {
      nums1[i] = numB;
      nums2Cursor--;
    }
  }
};

const arr1 = [1, 2, 3, 0, 0, 0];
merge(arr1, 3, [2, 5, 6], 3);
console.log(arr1);  // [1, 2, 2, 3, 5, 6]

const arr2 = [1];
merge(arr2, 1, [], 0);
console.log(arr2);  // [1]

const arr3 = [0];
merge(arr3, 0, [1], 1);
console.log(arr3);  // [1]

const arr4 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
merge(arr4, 6, [1, 2, 2], 3);
console.log(arr4);  // [-1, 0, 0, 1, 2, 2, 3, 3, 3]
```

## 도전

- time complexity O(m + n)

## 문제 이해 : 10:39 ~ 10:46 (7분)

- 정수 배열 num1, num2, 오름 차순 정렬
- 정수 m, n은 num1, num2의 element 수
- num1, num2를 오름 차순 정렬의 하나의 배열로 병합
- num1의 내부 요소를 변경해야함 (should not return)
- num1의 length는 m + n, m까지는 병합해야할 요소들, 이후 n만큼은 0으로 초기화된 요소들

## 해결 방법 : 10:46 ~ 10:53 (7분)

- m, n 0 케이스 early return
- num1 배열을 변경해야 하므로
    - 요소들의 이동을 최소화 하기 위해 num1 배열 뒤에서 부터 0으로 채워진 요소들에 들어갈 값을 선별하여 채워나간다. (배열의 역순으로)
        - num1의 cursor와 num2의 cursor를 별도로 관리하여 진행

## 코딩 : 10:53 ~ 11:07 (14분)

- 1차 시도 : 10:53 ~ 11:05 (12분)
- 2차 시도 : 11:05 ~ 11:07 (2분)

## 결과

- Runtime: 110 ms, faster than 17.07% of JavaScript online submissions for Merge Sorted Array.
- Memory Usage: 38.6 MB, less than 77.71% of JavaScript online submissions for Merge Sorted Array.

## 회고

- 문제 이해
    - 생각보다 시간이 오래 걸림, 영문 해석(번역 등) 및 예제를 통한 문제 이해
- 해결 방법
    - 생각할때 시간복잡도상으로 O(m + n)을 할 수 있는 방법을 생각할때 생각보다 빠르게 해결 아이디어가 생각남, 다만 이를 구체적인 로직으로 머리속에 정리하는데에 시간이 조금 걸림
- 코딩
    - 1차에서 크게 엣지 케이스도 아니었고 주어진 파라미터의 range를 고려하지 못하여 테스트 케이스가 깨지는 결과가 나왔음. (음수값 고려)
- 종합
    - 총 28분의 시간 소요 : 난이도 대비 하
    - 시간복잡도 : 상
    - 느낌 : 나쁘지 않음, 오랜만에 했는데 30분안에 풀어서 나름 선방했다고 판단

