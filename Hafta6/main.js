// console.log('Hello World');
/* let x = 5;
let y = 10;

const z = 15;

x = 7;

let a, b;

a = 100;
b = 50; */

// b = 'JavaScript';

// b = 100;

// let a = 'JAVA';

// document.getElementById('demo').innerHTML = 'Burasi inner html';

let a = 100 + 50;
a *= 10;
a++;
++a;

let name = 'Ahmet ';
let surname = 'Yigiter';

name += surname;

console.log(name);

let isValid = name === surname ? 'Bu dogru' : 'Bu yanlis';
console.log(isValid);

let person = {
  name: 'Ahmet Bugra',
  surname: 'Yigiter',
};

let nameSurname = printNameSurname(person);

console.log(nameSurname);

function printNameSurname(person) {
  return person.name + ' ' + person.surname;
}

let eleman = document.getElementById('demo');

console.log(eleman);

eleman.innerHTML = nameSurname;
eleman.style = 'background-color: #000;color:#fff';

let nothing = document.getElementById('nothing');
let button = document.getElementById('button');
button.onclick = changeNothing;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log('Cift: ' + i);
  } else {
    console.log('Tek: ' + i);
  }
}

let number = 0;

for (; number < 10; ) {
  console.log(number);
  number++;
}

function changeNothing() {
  if (nothing.innerHTML === 'I am visible now') {
    nothing.style = 'display: none';
    nothing.innerHTML = '';
  } else {
    nothing.innerHTML = 'I am visible now';
    nothing.style = 'display: block;color: blue;';
  }
}
