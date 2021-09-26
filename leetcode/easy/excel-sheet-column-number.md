```
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const numbers = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let sum = 0;
  for (let i = columnTitle.length - 1, j = 0; i >= 0; i--, j++) {
    const unit = Math.pow(26, j);
    sum += numbers[columnTitle[i]] * unit;
  }
  return sum;
};

console.assert(titleToNumber("A") === 1);
console.assert(titleToNumber("AB") === 28);
console.assert(titleToNumber("ZY") === 701);
console.assert(titleToNumber("FXSHRXW") === 2147483647);

```

## 도전

- 없음

## 문제 이해 : 11:14 ~ 11:19 (5분)

- FXSHRXW = 2147483647
- ZY = 701
- 26진수이네?
- 모든 문자는 대문자
- 값의 범위는 1 ~ 2147483647 (2^31 - 1)

## 해결 방법 : 11:19 ~ 11:22 (3분)

- 문자열 뒤에서 부터 지수가 0으로 시작되는 26진수로 취급하여 값을 계산한후 sum 한다.
  - Math.pow 사용
- A ~ Z map을 정의해서 숫자로 치환

## 코딩 : 11:22 ~ 11:27 (5분)

- 해결 방법 그대로 1차 시도 성공

## 결과

- Runtime: 80 ms, faster than 94.12% of JavaScript online submissions for Excel Sheet Column Number.
- Memory Usage: 40.2 MB, less than 60.10% of JavaScript online submissions for Excel Sheet Column Number.

## 회고

- 문제 이해
  - 설명이 짧고 비슷한 패턴의 문제를 풀어본적이 있던 거 같아서 쉽게 이해되었음(시간이 짧아짐)
- 해결 방법
  - 문제 이해 단계에서 사실상 해결방법이 자연스럽게 생각이 났음
- 코딩
  - 해결 방법을 그대로 코드로 옮기는 수준정도, 변수명은 아쉽다.
- 종합
  - 총 13분의 시간 소요 : 난이도 대비 중
  - 시간복잡도 : 상 O(n)
