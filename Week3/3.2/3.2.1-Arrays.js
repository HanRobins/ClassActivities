// create an Array using an Array literal
let myArray = ["maggie", "john", "tiffanie", "joe"];
// access the 1st item in the Array
console.log(myArray[0]);
// access the last item in the Array
console.log(myArray[3]);
// print the length of the Array
console.log(myArray.length);
// use the length property to access the last item in the Array
console.log(myArray.length - 1);
// with for...of, loop over the Array, modify the value and add to a different Array
let newArray = [];
let index = 0;

// for variable of iterable
for (let names of myArray) {
  newArray[index] = names + "My Name IS!";
  index++;
}

console.log(newArray);
