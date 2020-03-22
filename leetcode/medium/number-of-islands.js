// https://leetcode.com/problems/number-of-islands/
/**
 * Runtime: 60 ms, faster than 90.00% of JavaScript online submissions for Number of Islands.
 * Memory Usage: 37.5 MB, less than 74.19% of JavaScript online submissions for Number of Islands.
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numIsLands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        numIsLands++;
        dfs(grid, i, j);
      }
    }
  }

  return numIsLands;
};

function dfs(grid, i, j) {
  if (i < 0 || i > grid.length) return;
  if (j < 0 || j > grid[i].length) return;
  grid[i][j] = "0";

  //up
  if (i - 1 >= 0 && grid[i - 1][j] === "1") dfs(grid, i - 1, j);
  //right
  if (j + 1 < grid[i].length && grid[i][j + 1] === "1") dfs(grid, i, j + 1);
  //bottom
  if (i + 1 < grid.length && grid[i + 1][j] === "1") dfs(grid, i + 1, j);
  //left
  if (j - 1 >= 0 && grid[i][j - 1] === "1") dfs(grid, i, j - 1);
}
