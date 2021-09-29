```
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += i;
  }

  return (
    sum -
    nums.reduce((acc, cur) => {
      return acc + cur;
    }, 0)
  );
};

console.assert(missingNumber([3, 0, 1]) === 2);
console.assert(missingNumber([0, 1]) === 2);
console.assert(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8);
console.assert(missingNumber([0]) === 1);

```

## 도전

- time O(n), memory O(1)

## 문제 이해 : 11:54 ~ 11:57 (3분)

- 유니크한 숫자가 있는 배열안에서 범위안에 없는 숫자를 찾아라.

## 해결 방법 : 11:57 ~ 12:01 (4분)

- 1부터 n까지의 합을 구한후
- 합에서 배열안의 숫자를 모두 뺀다.
- 남은 숫자가 없는 숫자이다.

## 코딩 : 12:01 ~ 12:04 (3분)

- 해결 방법 그대로 1차 성공

## 결과

- Runtime: 76 ms, faster than 88.63% of JavaScript online submissions for Missing Number.
- Memory Usage: 41.3 MB, less than 42.79% of JavaScript online submissions for Missing Number.

## 회고

- 문제 이해
  - 충분히 빨랐고
- 해결 방법
  - 충분히 빨랐고 도전 포인트도 만족
- 코딩
  - 충분히 빨랐고 도전 포인트도 만족
- 종합
  - 총 10분의 시간 소요 : 난이도 대비 상!
  - 시간복잡도 : O(n)
  - 공간복잡도 : O(1)