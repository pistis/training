/**
 * O(1)
 */
function solution(X, Y, D) {
  const diff = Y - X;

  return (
    parseInt(Number.parseFloat(diff / D).toFixed(2)) + (diff % D > 0 ? 1 : 0)
  );
}

solution(10, 85, 30); // 3
solution(10, 85, 1); // 75
solution(84, 85, 100000000); // 75
