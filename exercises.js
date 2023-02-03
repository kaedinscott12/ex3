// 3-1
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((total, currentValue) => {
  return total.concat(currentValue);
}, []);

console.log(flatArray);
// → [1, 2, 3, 4, 5, 6]

//3-2
function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

//3-3
//3-4

function everyLoop(array, test) {
  for (let item of array) {
    if (test(item) === false) {
      return false;
    }
  }
  return true;
}

function everySome(array, test) {
  return !array.some(function (element) {
    return !test(element);
  });
}

console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(everyLoop([], (n) => n < 10));
// → true
