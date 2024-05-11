// -------------------------------forEach----------------------------
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

// ---------------------------------map Array---------------------------
// used to create a new array by applying a provided function to chech element of the existing array

const fruitsnew = ["Pomo", "avacado", "kivi"];
const freshfruits = fruitsnew.map((fruitnew) => {
  return "testy " + fruitnew.indexOf();
});
console.log(freshfruits);

const number = [1, 2, 3, 4, 5];

const doublenum = number.map((num) => {
  return num + 2;
});
console.log(doublenum);

//------------------------------ at()--------------------------------------------
const charecter = ["a", "b", "c", "d", "e", "f"];
console.log(charecter.at(3));

// ------------------------Array.prototype.copyWithin()------------------------------
const fruitsval = ["Banana", "Orange", "Apple", "Mango", "pomo", "Gova"];
console.log(fruitsval.copyWithin(2, 3));

// Array.prototype.entries()
