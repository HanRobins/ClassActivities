// refactor the functions below into arrow syntax
// function myNumberFunction() {
//   return ((2 ** 2 + 3) % 4) * 14;
// }

//arrow func
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

console.log(myNumberFunction());
// normal func
// function greet(name) {
//   return `Hello, ${name}`;
// }

//arrow function
const greet = name => `Hello, ${name}`;

greet("Hannah");

//normal function
// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };

// arrow function
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

timeOfDayGreet("hannah", 545);

//normal function
// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }

//arrow function
const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

tripleAndHalf(34);

//normal function
// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }

//arrow function
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
