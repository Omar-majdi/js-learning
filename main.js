//Challenge one (from 71 - 78)
let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];
let string = mix
  .map((ele) => {
    return isNaN(ele) ? ele : '';
  })
  .reduce((acc, current) => {
    return `${acc}${current}`;
  });

console.log(string);
//#############################################################################3
//Challenge two (from 71 - 78)
let myString = 'EElllzzzzzzzeroo';
let noRepeat = myString
  .split('')
  .filter((ele, index, arr) => {
    return arr.indexOf(ele) == index;
  })
  .reduce((acc, current) => {
    return `${acc}${current}`;
  });

console.log(noRepeat);
//#############################################################################3
//Challenge Three (from 71 - 78) -----------------IMP-----------------
let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];
let oneArray = myArray
  .reduce((acc, val) => acc.concat(val), [])
  .reduce((acc, current) => {
    return `${acc}${current}`;
  });
console.log(oneArray);
//#############################################################################3
//Challenge Four (from 71 - 78)
let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];
let justNums = numsAndStrings
  .filter((ele) => {
    return !isNaN(ele) ? ele : '';
  })
  .map((ele) => -ele);
console.log(justNums);
//#############################################################################3
//Challenge Five (from 71 - 78) -----------------IMP-----------------
let nums = [2, 12, 11, 5, 10, 1, 99];
let num500 = nums.reduce((acc, current, index, arr) => {
  return current % 2 !== 0
    ? acc + current
    : current % 2 === 0
    ? acc * current
    : 0;
}, 1);
console.log(num500);
