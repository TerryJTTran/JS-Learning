// Write a message to the console.
//console.log('hello world!');
//console.log("Live Message Test");

//Variables
//const variableWelcome = 'Welcome to variables!'

/*
Can write variables using let, var, or const (let is prefered (Has some scope restrictions))
Variables cannot be defined using the same name as another variable
Variables cannot be keywords for names (var, let, etc...)
Variables must start with a letter, $ or _
Variables can have letters, digits, $ or _ after first character
*/

//console.log(variableWelcome);

//Data Types
/*
Primitive: Strings, Numbers, Booleans, Null, Undefined, Symbol
Complex Types: Object

Strings:
Single and double quotes function the same and are simple strings.
Backticks (``) can also be used for strings but have added 
functionality of being able to imbed variables using ${} syntax
*/
const name = "Terry";
const backticks = `Hello, ${name}`;
const backticks2 = `2 + 2 = ${2+2}`;

//console.log(backticks)
//console.log(backticks2)

//Type of returns the data type
//console.log(typeof backticks);

/*
Numbers:
Do not need to define number type (int, float, etc...)
*/
const number1 = 5;
const number2 = 4.5;

//console.log(`${number1 + number2}`)

/*
Booleans:
true - yes, correct, 1
false - no, incorrect, 0
*/ 
/*
const bool1 = true;
if (bool1){
    console.log("True");
}*/

/*
Null:
It's own type/value, used to represent nothing, empty, unknown

Undefined:
When a variable is not assigned a value

Objects:
Used to group variables
*/

const person = {
    name: 'John',
    age: 25,
}

console.log(person);
console.log(person.age);
console.log(person.name);

//Array
const arr = [1, 2, 3, 4];
console.log(typeof arr);
console.log(arr);

const date = new Date();
console.log(date)

//JavaScript is dynamically typed

//Comparison Operators => return true/false
//const a = 10;
//const b = "10";
//Strict Equality (strict means no type casting, must be same data type) 
//console.log(a === b);
//Strict Inquality 
//console.log(a !== b);

/*
//While loop example
let i = 0;
while(i < 10){
    console.log(i);
    i = i + 1;
}

//For loop example
for(let i = 0; i < 10; i++){
    console.log(i);
}
*/

/* 
Functions:
function square(number){
    return number * number;
}

const result = square(7);
console.log(result)

//Arrow function:
const square = (number) => {
    return number * number;
}

const square = (number) => number * number;

const result = square(10);

console.log(result);
*/