// Named Parameters
// write a function that takes two named parameters:
function LearnParameter(param1, param2) {
  // print each named parameter,
  console.log(param1, param2);
  //console.log(restParam);
  // then return the parameters added together
  return param1 + param2;
}

// invoke the function and pass in two numbers
console.log(LearnParameter(3, 4));
// invoke the function and pass in more than two numbers
console.log(LearnParameter(3, 4, 5));
// invoke the function and pass in only one number
console.log(LearnParameter(4));
// change the function to set default values for the parameters
function LearnParameter2(param1 = 10, param2 = 11) {
  // print each named parameter,
  console.log(param1, param2);

  // then return the parameters added together
  return param1 + param2;
}
// again, invoke the function and pass in only one number
console.log(LearnParameter2(1));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function LearnParameter3(param1 = 10, param2 = 11, ...restParam) {
  // print each named parameter,
  console.log(param1, param2);
  console.log(restParam);
  // then return the parameters added together
  return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
console.log(LearnParameter3(1, 2, 3, 4, 5, 6));
