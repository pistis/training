```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const frequency = {};

  for (let i = 0; i < nums1.length; i++) {
    if (frequency[nums1[i]] === undefined) {
      frequency[nums1[i]] = [1, 0];
    } else {
      frequency[nums1[i]][0] += 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (frequency[nums2[i]]) frequency[nums2[i]][1] += 1;
  }

  const result = [];
  Object.keys(frequency).forEach((key) => {
    const frequencyCnt = Math.min(frequency[key][0], frequency[key][1]);
    for (let i = 0; i < frequencyCnt; i++) {
      result.push(key);
    }
  });

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]

```

## 도전

- 없음

## 문제 이해 : 11:39 ~ 11:44 (5분)

- element가 두 배열에 교차되어 나타나는 횟수만큼 결과 배열에 포함되어야 한다.
  - Input: nums1 = [1,2,2,1], nums2 = [2,2]
  - Output: [2,2]
  - Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  - Output: [4,9]

## 해결 방법 : 11:44 ~ 11:50 (6분)

- 핵심
  - 각 배열 마다 element가 얼만큼 출현했는지 수치 기록 필요
    - 맵으로 노출 카운트 관리
    - 나타날때마다 키(숫자)의 값(노출)을 증가
      - 배열별로 관리
    - 최종 결과 배열에 숫자는 배열별 빈도수중 min 값만큼 출현

## 코딩 : 11:50 ~ 12:05 (15분)

- 배열별로 빈도수를 측정해야하는 것을 간과하고 진행...하다가 시간이 좀 더 소요

## 결과

- Runtime: 76 ms, faster than 85.69% of JavaScript online submissions for Intersection of Two Arrays II.
- Memory Usage: 41.3 MB, less than 14.17% of JavaScript online submissions for Intersection of Two Arrays II.

## 회고

- 문제 이해
  - 여러번이 나오는 것에 대해서 기준을 이해하는데에 시간이 소요됨
- 해결 방법
  - 맵을 사용하여 빈도수를 측정하는 방식을 시도
- 코딩
  - 해결 방법에서 로직을 만들때 조건을 간과하고 생각하여 코딩에서 시간이 소요됨
- 종합
  - 총 26분의 시간 소요 : 난이도 대비 하
  - 시간복잡도 : O(M + N)
  - 공간복잡도 : O(max(M, N))
