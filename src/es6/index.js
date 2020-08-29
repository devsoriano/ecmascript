function newFunction(name, age, country) {
  var name = name || 'Rafael';
  var age = age || '31';
  var country = country || 'Mexico';
  console.log(name, age, country);
}


//es6
function newFunction2(name = 'Rafael', age = '32', country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'Colombia');

let hello = "Hello";
let world  = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epcPhrase2 = `${hello} ${world}`;
console.log(epcPhrase2);

let lorem = "Escribo una frase gigante que quiero separar \n"
+ "otra linea";

console.log(lorem);

let lorem2 = `frase del primer renglon
frase del segundo renglon`;

console.log(lorem2);

let person = {
  'name': 'Rafael',
  'age': 31,
  'country': 'MX'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);


let team1 = ['Oscar', 'Ricardo', 'Valeria'];
let team2 = ['Rafa', 'Karen', 'Omar'];

let educacion = ['David', ...team1, ...team2];

console.log(educacion);


{
  var globalVar = "Global Var";
}
{
  let globalLet = "Global let";
  console.log(globalLet);
}
//console.log(globalLet);
console.log(globalVar);


const a = 'b';
//a = 'a'
console.log(a);

let name = 'Rafa';
let age = '31';

obj = { name: name, age: age};
objECMA6 = {name, age}; 

console.log(obj);
console.log(objECMA6);

const names = [
  {name: 'Rafa', age:'31'},
  {name: 'Anna', age:'27'}
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNamesECMA6 = names.map( item => console.log(item.name));

const listOfName3 = (name, age, country) => {
  ...
}

const listOfName4 = name => {
  ...
}

const square = num => num * num;



const helloPromise = () => {
  return new Promise((resolve, rejected) => {
    if (true) {
      resolve('Hey!');
    } else {
      rejected('Ups!!!');
    }
  })
}
  
helloPromise()
  .then( response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));


class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));


import { hello } from './module';
hello();

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);