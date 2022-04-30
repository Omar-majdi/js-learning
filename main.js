/*
    Function
    - Arrow Function
    -- Regular vs Arrow [Param + No Param]
    -- Multiple lines
*/

let print = function () {
  return 10;
};

let printArrow = () => 10;

let printNum = function (num) {
  return num;
};

let printNumArrow = (num) => num;

let printSum = function (num1, num2) {
  return num1 + num2;
};

let printSumArrow = (num1, num2) => num1 + num2;
console.log(printSumArrow(100, 50));
