// Map Challenges

let swappingCases = 'elZERo';
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = 'Elz123er4o';

// let sw = swappingCases
//   .split('')
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join('');

// Arrow Function
let sw = swappingCases
  .split('')
  .map((ele) => {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join('');

console.log(sw);

let inv = invertedNumbers.map((ele) => {
  return -ele;
});
console.log(inv);

let ign = ignoreNumbers
  .split('')
  .map((ele) => {
    return isNaN(parseInt(ele)) ? ele : '';
  })
  .join('');

console.log(ign);
