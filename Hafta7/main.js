const programmingLanguages = ['Java', 'JavaScript', 'C', 'C#'];

console.log(programmingLanguages);
console.log(programmingLanguages[0]);

let importantVar = programmingLanguages.pop();
let importantVar2 = programmingLanguages.shift();
// importantVar = 'Python';
console.log(programmingLanguages);

console.log(importantVar);
console.log(importantVar2);

programmingLanguages.push(importantVar);
programmingLanguages.unshift(importantVar2);

console.log(programmingLanguages.length);

delete programmingLanguages[0];

console.log(programmingLanguages[0]);

const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];

const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);
myArray = myChildren.splice(1, 2, 'John');
console.log(myChildren);
// console.log(myArray);

const newArray = myChildren.slice(2);
console.log(myChildren);
console.log(newArray);

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

let numbers = [40, 100, 1, 5, 25, 10, 5];
console.log(numbers);
/*numbers.sort(function (a, b) {
  return a - b;
}); */
//console.log(numbers);

console.log(Math.min.apply(null, numbers));

const sum = (a, b) => {
  return a + b;
};

// numbers.forEach((item) => console.log(item));
/*numbers = numbers.map((item) => {
  return item + 100;
});*/

const legal = numbers.filter((number) => number > 18);
const isLegal = numbers.every((number) => number > 18);
const isSome = numbers.some((number) => number > 18);
const findVar = numbers.find((number) => number > 18);

console.log(legal);
console.log(isLegal);
console.log(isSome);
console.log(findVar);
console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(5));

let sum2 = numbers.reduce((total, value) => {
  return total + value;
});

console.log(sum2);
