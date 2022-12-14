/**
 * 1 write the function to determine if 3 (Number 3) nah been passed 3 return true
 * @returns {Boolean}
 * @example istTreePassed(1,2) // false
 * @example istTreePassed("3") // false
 * @example istTreePassed(9,3,4,9) // true
 */
function isTreePassed() {
  return [...arguments].some((el) => el === 3);
}

console.log(isTreePassed(1, 2));
console.log(isTreePassed(9, 3, 4, 9));

/**
 * 2. Write the function to flatten complex array
 * @param {Array} array@returns {Array}
 * @example flatten([1, [1, 2, [3, 4]], [2, 4]]) // [1, 1, 2, 3, 4, 2, 4])
 */
function flatten(arr) {
  const newArr = [];
  arr.forEach((el) => {
    Array.isArray(el) ? newArr.push(...flatten(el)) : newArr.push(el);
  });
  return newArr;
}

console.log(flatten([]));
console.log(flatten([1, [1, 2, [3, 4]], [2, 4]]));
console.log(flatten([1, [1, 2, {foo: 'bar'}, [3, 4, [5, 6]]], [2, 5]]));

/**
 * 3. Write the function to sum added arguments by chain of calls
 * @param {Number} Number to add
 * @example add(5)(3)() // return 8
 */
const add = (a) => {
  return (b) => b !== undefined ? add(a + b) : a;
};

console.log(
  'add(1)(2)(0)(5)(0)() =',
  add(1)(2)(0)(5)(0)()
  ); // 8
