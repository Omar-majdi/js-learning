let sentence = 'I Love Foood Code Too Playing Much';

let smallWords = sentence
  .split(' ')
  .filter((ele) => {
    return ele.length <= 4;
  })
  .join(' ');
console.log(smallWords);

let mix = 'A13BS2ZX';
let mixedContent = mix
  .split('')
  .filter((ele) => {
    return !isNaN(parseInt(ele));
  })
  .map((ele) => {
    return ele * ele;
  })
  .join('');
console.log(mixedContent);
