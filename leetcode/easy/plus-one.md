```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    carry = parseInt(sum / 10);
    digits[i] = carry ? sum % 10 : sum;
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};

console.assert(plusOne([1, 2, 3]).toString() === [1, 2, 4].toString());
console.assert(plusOne([4, 3, 2, 1]).toString() === [4, 3, 2, 2].toString());
console.assert(plusOne([0]).toString() === [1].toString());
console.assert(plusOne([9]).toString() === [1, 0].toString());

```

## 도전

- 

## 문제 이해 : 23:14 ~ 23:18 (4분)

- 자리수 : 1 ~ 100
- 수 : 0 ~ 9
- 최소 0 , 최대 9999,,,9 (100자리수)

## 해결 방법 : 23:18 ~ 23:21 (3분)

- 배열의 최하위 순(마지막 index)부터 최상위 순(첫 index)으로 반복하며 
  - 더한수의 결과로 기존 값을 바꿔치기 하고
  - carry값을 구한 후 다음 더할 수로 만들어 주고
  - index가 0이될때까지 모두 한다음 마지막 carry가 1이상이면 결과배열의 앞에 unshift로 값을추가하고 반환

## 코딩 : 23:21 ~ 23:29 (8분)

- 해결 방법을 그대로 코딩

## 결과

- Runtime: 75 ms, faster than 60.84% of JavaScript online submissions for Plus One.
- Memory Usage: 39 MB, less than 33.81% of JavaScript online submissions for Plus One.

## 회고

- 문제 이해
  - 어렵지 않은 설명이라 명확히 이해, 100자리수이므로 number로 치환할 수 없다는 것을 이해
  - 배열 자체를 다루어야 한다는 것을 이해
- 해결 방법
  - 배열의 인덱스를 거꾸로 순회하며 더하기를 수행하는 로직
- 코딩
  - 로직 그대로 코딩, 크게 어려움은 없으나 속도가 생각보다 느리다고 판단
- 종합
  - 총 15분의 시간 소요 : 난이도 대비 상
  - 시간복잡도 : O(N)
    - 한번의 순회
  - 공간복잡도 : O(1)