let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// });

// console.log(add);

/*
Reduce
- Longest Word
- Remove Characters + Use Reduce
*/

let theBiggest = [
  'Bla',
  'Propaganda',
  'Other',
  'AAA',
  'Battery',
  'Test',
  'Propaganda_Two',
];

let check = theBiggest.reduce((acc, current, index, arr) => {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

let finalString = removeChars
  .filter((ele) => {
    return !ele.startsWith('@');
  })
  .reduce((acc, current) => {
    return `${acc}${current}`;
  });

console.log(finalString);
