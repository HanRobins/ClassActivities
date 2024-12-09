let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = "";
z = undefined;

// print x, y, and z
console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// ! Cannot reassign Constant variables
// const a = "";
// const b = null;
// const c = undefined;

console.log(a, b, c);
// using BRACKET NOTATION, assign a value to b
b[0] = "CHEEZIT";
console.log(b);
// using DOT NOTATION, assign a PROPERTY to c

// using DOT NOTATION, assign a METHOD to c

// using BRACKET NOTATION, call the method in c

// print a, b, and c
