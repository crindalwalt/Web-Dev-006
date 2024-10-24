console.log("Hello from the operators");


/**
 * operator perform operations among operands
 * 4 types of operators
 * 1) arithmatic operators (+,-,*,/,%)
 * 2) camparision operator (<,>,<=,>=,==,===,!=)
 * 3) assignment operator (=,+=,-=,*=,/=)
 * 4) logical operators (&& , || , !)
 * 
 * 
 */
let num1 = 34;
let num2 = 12;

// arithmatic operatorstruesu
let result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = num1 % num2;

// camparison operators
result = num1 < num2;
result = num1 > num2;
result = num1 >= num2;
result = num1 <= num2;
result = num1 == num2;
result = num1 != num2;
result = num1 === num2;



// assignment operators
result = 56;
let myAge = 21;
result = myAge;
result = myAge + 100;

result = result + 20; // 141
result += 12; // 153
result -= 13; // 140
result *= 2; // 280
result /= 28;


// logical operators 
let condition = num1 > num2 && num1 > 100;
condition = !(num1 < num2 || num1 == 34);
//                 false || true

// console.log(condition);



// test


let a = 10;
let b = 20;
let c = 30;
let d = 40;

let e = b + c + a + a ;
e = (e + a) *2;
c = a;
c = c + 24;
console.log(c);


