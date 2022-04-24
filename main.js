/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]
my.splice(--zero, counter + counter, 'Elzero');
console.log(my); // "Elzero"
my.splice(zero, counter + counter, 'rO');
console.log(my); // "rO"
