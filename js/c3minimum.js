
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

target = 24
current, history
// starting numbers from return find(1,"1")
1, "1"
// add 5
6, "(1 + 5)" //too low
// add 5
(11, "(1 + 5 + 5") // too low
// add 5
(16, "1 + 5 + 5 + 5") // too low