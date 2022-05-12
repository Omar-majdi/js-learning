// Challenge 1 (Not Comleated) ---------------------------------------------------------------------------
// CodeWars (Abbreviate a Two Word Name) Challenge will help you
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    var nameArray = zName.split(' ');
    return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  namePattern(zName);
  function ageWithMessage(zAge) {
    // Write Your Code Here
    let nameArray = zName.split(' ');
    return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    let nameArray = zName.split(' ');
    return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${zName}, Your age is ${zAge}, You Live In ${zCountry}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails('Osama Mohamed', '38 Is My Age', 'Egypt'));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails('Ahmed ali', '32 Is The Age', 'Syria'));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Challenge 2 ---------------------------------------------------------------------------
// function itsMe() {
//   return `Iam A Normal Function`;
// }

// let itsMe = () => `Iam An Arrow Function`;

// console.log(itsMe); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }

//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate('https', 'elzero', 'org'));

// Challenge 3 ---------------------------------------------------------------------------
// !!!!!!!!!!!!(Currying Function Technique) Very Important;
// let checker = (zName) => (status) => (salary) =>
//   status === 'Available'
//     ? `${zName}, My Salary Is ${salary}`
//     : `Iam Not Available`;

// console.log(checker('Osama')('Available')(4000)); // Osama, My Salary Is 4000
// console.log(checker('Ahmed')('Not Available')()); // Iam Not Avaialble

// Challenge 4 ---------------------------------------------------------------------------
function specialMix(...data) {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] == Number) {
    }
  }
}

// Video Challenge 1
//let print = (...names) => `String [${names.join('],[')}]=> Done!`;
//console.log(print('rabi', 'adnan', 'elham', 'hamza', 'toto'));

// Video Challenge 2
// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums.shift();
// console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80
