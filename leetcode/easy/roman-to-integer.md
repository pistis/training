```
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let num = symbols[s[s.length - 1]];
  let prev = num;
  for (let i = s.length - 2; i >= 0; i--) {
    let current = symbols[s[i]];
    if (current < prev) {
      num -= current;
    } else {
      num += current;
    }
    prev = current;
  }

  return num;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994

```

## 도전

- 특별히 없음

## 문제 이해 : 11:25 ~ 11:32 (7분)

- I, V, X, L, C, D and M의 로마숫자
- 왼쪽 -> 오른쪽 큰 숫자를 표현
- 로마숫자를 숫자로 표현
  - 이때 뺄셈도 가능
    - 뺄셈인 경우의 문자는 왼쪽이 오른쪽보다 작은 숫자

## 해결 방법 : 11:32 ~ 11:43 (11분)

- 로마숫자 = 숫자 맵 사용
- (아이디어 1) 입력받은 로마숫자 문자열(1 ~ 15 len)을 토큰화
  - 토큰은 하나 또는 두개 또는 여러개의 문자로 이루어 질 수 있다.
    - 하나 : 단일 문자
    - 여러개 : 같은 문자들
    - 두개 : 음수문자 + 단일 문자
  - 토큰을 숫자로 해석
- (아이디어 2) 뒤에서 부터(가장 작은 수) 수를 더하다가 더하려고 하는 수가 이전에 더한 수보다 작으면(즉 위계질서에 맞지 않으면) 뺄셈으로 판단하고 뺄셈으로 처리
  - 문자열의 뒤에서 부터 반복하여 계산

## 코딩 : 11:43 ~ 11:50 (7분)

- 1차시도에서 current를 prev로 저장하는 것을 놓쳤으나 이는 이미 생각했던 로직을 놓친것이므로 1차시도 성공으로 침 - 해결 방법 아이디어2로 진행하였으며 아이디어대로 그냥 코드를 쓰고 바로 통과

## 결과

- Runtime: 213 ms, faster than 30.04% of JavaScript online submissions for Roman to Integer.
- Memory Usage: 44.9 MB, less than 59.88% of JavaScript online submissions for Roman to Integer.

## 회고

- 문제 이해
  - 생각보다 시간이 많이 걸린다. 영어가 문제라기보다는 정확히 이해하는데에 항상 이정도 시간이 필요한 뇌인듯...
- 해결 방법
  - 처음에 너무 어렵게 접근, 왼쪽 -> 오른쪽으로 숫자가 작아진다는 문제의 조건이 해결의 키였으나 이를 간과하고 있었음
  - 결국 그 키를 기반으로 하는 아이디어2번의 로직을 구체화
- 코딩
  - 아이디어2번의 구체화된 해결방안을 그대로 코드로 옮기는 정도
  - 그런데 거의 별도의 추가적인 고민없이 그대로 옮기고 테스트 하는데에도 7분이라는 시간이 소요됨
- 종합
  - 총 25분의 시간 소요 : 난이도 대비 하
  - 시간복잡도 : 상 time complexity O(n)
  - 느낌 : 해결 방안 구상에서 시간이 조금 걸리긴 했지만, 30분안에 풀어서 나쁘지 않음, 다만, 문제 이해와 해결 방안에 난이도 대비 시간이 많이 걸리는 것인지 근본적인 의문이 듬.
