```
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root || root.val === undefined) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const test1Node = () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
  return root;
};

const test2Node = () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  return root;
};

const test3Node = () => {
  const root = new TreeNode(0);
  return root;
};
console.assert(maxDepth(test1Node()), 3);
console.assert(maxDepth(test2Node()), 2);
console.assert(maxDepth(new TreeNode(null)), 0);
console.assert(maxDepth(test3Node()), 1);

```

## 도전

## 문제 이해 : 23:32 ~ 23:34 (2분)

- 이진 트리
- node의 수 0 ~ 10^4
- node의 값 -100 ~ 100

## 해결 방법 : 23:34 ~ 23:47 (13분)

- root부터 left, right로 들어가며 재귀적으로
  - 자기 자신의 depth를 위한 값 1을 반환 + 자신의 left와 right중 더 큰값을 더해서 반환
- 최종적으로 반환된 값 중 max값이 longest depth value

## 코딩 : 23:57 ~ 24:06 (9분)

- 예외처리 부분에서 시간 소비
- 예제 만드는데 시간 소비
- 구현 자체는 심플

## 결과

- Runtime: 119 ms, faster than 19.44% of JavaScript online submissions for Maximum Depth of Binary Tree.
- Memory Usage: 42.2 MB, less than 10.25% of JavaScript online submissions for Maximum Depth of Binary Tree.

## 회고

- 문제 이해
  - 내용이 적고 심플하여 빠르게 이해
- 해결 방법
  - 예시 코드가 TreeNode를 다루는 것을 보지 못하고 문제상의 example이 배열인 것을 보고 배열로 트리를 표현한 자료구조라고 생각하고 잘못접근
  - TreeNode 자료구조를 인지한 후에는 쉽게 재귀방식의 아이디어로 접근
- 코딩
  - main 로직은 금방 구현했으나 예제를 만드는게 시간이 더 걸림
- 종합
  - 총 24분의 시간 소요 : 난이도 대비 하
  - 시간복잡도 : O(N) 모든 원소를 접근하므로