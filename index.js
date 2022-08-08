/**
 * 3. Write the function to sum added arguments by chain of calls
 * @param {Number} Number to add
 * @example add(5)(3)() // return 8
 */
const add =(a) => {
  return (b) => b !== undefined ? add(a + b) : a;
};

console.log(
  'add(1)(2)(0)(5)(0)()=',
  add(1)(2)(0)(5)(0)()
  ); // 8