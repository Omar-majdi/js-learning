// Challenge 1
/*
let Gender;
function sayHello(theName, theGender) {
    if (theGender === 'Male') {
        Gender = 'Mr';
        console.log(`Hello ${Gender} ${theName}`);
    } else if (theGender === 'Female') {
        Gender = 'Miss';
        console.log(`Hello ${Gender} ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello('Osama', 'Male'); // "Hello Mr Osama"
sayHello('Eman', 'Female'); // "Hello Miss Eman"
sayHello('Sameh'); // "Hello Sameh"
*/

// Challenge 2
/*
function calculate(firstNum, secondNum, operation) {
    operation === 'add'
    ? console.log(firstNum + secondNum)
    : operation === 'subtract'
    ? console.log(firstNum - secondNum)
    : operation === 'multiply'
    ? console.log(firstNum * secondNum)
    : secondNum === undefined
    ? console.log('Second Number Not Found')
    : console.log(firstNum + secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
*/

// Challenge 3
/*
function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        console.log('Age Out Of Range');
    }
    console.log(`Months => ${theAge * 12}`);
    console.log(`Weeks => ${theAge * 52}`);
    console.log(`Days => ${theAge * 365}`);
    console.log(`Hours => ${theAge * 8760}`);
    console.log(`Minutes => ${theAge * 525600}`);
    console.log(`Seconds => ${theAge * 31_536_000}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/

// Challenge 4 (Important)
/*
function checkStatus(a, b, c) {
    let name, age, state;
    let info = [a, b, c];
  for (let i = 0; i < info.length; i++) {
      if (typeof info[i] === 'string') {
          name = info[i];
        } else if (typeof info[i] === 'number') {
            age = info[i];
        } else if (typeof info[i] === 'boolean') {
            if (info[i] === true) {
                state = 'Avilable';
            } else if (info[i] === false) {
                state = 'Not Avilable';
            }
        }
    }
    
    console.log(`Hello ${name}, Your Age is ${age}, You Are ${state} For Hire`);
}

// Needed Output
checkStatus('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

// Challenge 5
/*
function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (startYear; startYear <= endYear; startYear++) {
        document.write(`<option value = "${startYear}">${startYear}</option>`);
    }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
*/

// Challenge 6
/*
function multiply(...data) {
    let result = 1;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            result *= parseInt(data[i]);
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply('A', 10, 30); // 300
multiply(100.5, 10, 'B'); // 1000
*/
