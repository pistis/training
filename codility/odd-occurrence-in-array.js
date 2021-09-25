/**
 * 수치가 커질때 시간이 오래 걸림
 */
function solution_old(A) {
  const len = A.length;
  if (len === 1) return A[0];

  const flags = new Array(1000000001);

  for (let i = 0; i < len; i++) {
    flags[A[i]] = !flags[A[i]];
  }

  return flags.findIndex((element) => element);
}

function solution(A) {
  const len = A.length;
  if (len === 1) return A[0];

  const flags = {};

  for (let i = 0; i < len; i++) {
    flags[A[i]] = !flags[A[i]];
  }
  return Number(Object.keys(flags).find((key) => {
    return flags[key];
  }));
}
solution([9, 3, 9, 3, 9, 7, 9]);
