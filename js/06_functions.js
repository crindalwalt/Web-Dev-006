console.log("Functions in JS");

/**
 * Function are just block of code to be reused
 * Function consists of two parts
 *  function definition
 *  function call
 *
 * Function recieve some values
 */

// definition
function sayHello(name) {
  console.log(`Hello ${name} have a great day`);
}
function sum(n1, n2) {
  let result = n1 + n2;
  // console.log(`The sum of ${n1} and ${n2} is ${result}`);
  return result;
}
function getPercentage(obtainedMarks, totalMarks) {
  let result = (obtainedMarks / totalMarks) * 100;
  result = Math.round(result);
  return result;
  // console.log(`The percentage of ${obtainedMarks} out of ${totalMarks} is ${ result.toFixed(2)}%`);
}

function getGrades(perc) {
  if (perc >= 85) {
    console.log("A+ grade");
  } else if (perc >= 60 && perc < 85) {
    console.log("A Grade");
  } else if (perc >= 50 && perc < 60) {
    console.log("B Grade");
  } else if (perc >= 40 && perc < 50) {
    console.log("C Grade");
  } else if (perc < 40) {
    console.log("F Grade");
  }else {
    console.log("Invalid choice");
  }
}

let num1 = 34;
let num2 = 55;
let result = num1 + num2;
console.log(result);

let obtained = 89;
let total = 100;
let percentage = (obtained / total) * 100;
console.log(`The percentage is ${percentage}%`);

// CALL

sayHello("Shahzad");
sayHello("Salman");
sayHello("Junaid");

let sum1result = sum(100, 200);
console.log(sum1result);
let sum2result = sum(num1, num2);
console.log(sum2result);

// getPercentage(548,1100);
// getPercentage(653,1100);
// getPercentage(1001,1100);
let myPercentage = getPercentage(362, 1100);
console.log(myPercentage);
getGrades(myPercentage);
