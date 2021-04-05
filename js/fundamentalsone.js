// Varables 
/*
var name = 'john Doe';
console.log(name)
// reasign 
name = "steve smith";
console.log(name);
// initializ a variable: means creating a variablbe without assigning a value
var greeting; //you are actually setting it to underfind
console.log(greeting);
greeting = 'Hello'; // setting a value
console.log(greeting);

// there are just few things that a variable cannot incude. there can include
// numbers,letters,_ & also there cannot start with a number
// var 1name = 'John doe' not acceptable way of name a variable

// CONVENTIONAL WAY FOR MULTI WORDS 
var firstName = 'John Doe'; //camelCase
var first_name = 'Sarah William'; // Underscore
var FirstName = 'Julio Ceaser'; //  Pascal case
*/

// let work similar way as var except the fact it has more advantages when it comes to scope

/*
let firstName = 'John Doe';
console.log(firstName);
//  You can also reasign a variable using let
firstName = 'Acticon Smith';
console.log(firstName)
// You can also initialize a variable using let
let sunName;
sunName = 'James';
console.log(sunName);
*/

/*
const firstName = 'John Browsko';
console.log(firstName);
// const cannot be reasigned
firstName = 'Tonny cruz';
console.log(firstName);
// const cannnot be initialize
const greeting:
greeting = 'How are you learning';
console.log(greeting);
*/

/*There are two types of data types in javascript. primitive and referece type
with primitive types the data is stored directly in the location that the variables access
there are store on a stack there are accessed by the actual value
Referece types are object that are accessed by referece, the data is'nt stored in the variable
is stored on what is called the heap which have to do with dynamically allocated memory.
in Javascript we have 6 primitive data types which are string, Number, Boolean, Null, undefined, Symbols

strings: sequence of character
number is just a number int float are all considered number 
boolean: true or false
Null:an intentional empty value
undefined: variable that has not be assigned a value

Reference types: are non premitive there are not accessed by the actual value there are accessed by reference
there are also considered object Arrays Object literal functions date */


/*
// Primitive types 
const firstName = 'John Doe'; //strings
const age = 22; // Number
const hasKid = true; // Booleans
let userName; // underfined
const car = Null; // NUll

//  Reference Types: and this are all going to come back as an object

const hobby = [movies, reading]; // Array

const address = { // Object
    city: 'Lafia',
    state:  'Nasarawa'
}
const today = new Date(); // Dates


console.log(typeof firstName);
*/
// Types conversion: is taking a data or a variable and changing its data types 



/*
let val;

// Number to string
val = String(5);
val = (7).toString();
// String to number
val = Number('9.892');
val = parseInt('88') //only passes int
val = parseFloat(99.9127); // parses along with decimal

console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2))

// Type coraccion: basically changing of data types but we don't basically do it ourself but by the browser
const valNumberOne = '7';
const valNumberTwo = 5;
const sumVal = parseInt(valNumberOne + valNumberTwo);
console.log(sumVal);
console.log(typeof sumVal);


*/

/*
// STRING METHOD AND CONCATINATION

const userName = 'Trx';
const middleName = 'Tenni';

let val; 
// concatinate
val = userName + ' ' + middleName;
// Append to
val = 'Mike';
val += ' Tyson'
// Escaping 
val = 'that\'s awaesome and i can\'t imaging how great this things are';
// length
val = userName.length;

val = userName.toUpperCase();
val = userName.toLowerCase();
val = userName.indexOf('x');
val = middleName.lastIndexOf('i');
val = middleName.charAt('2')



console.log(val);
*/

/*
const numb1 = 100;
const numb2 = 50;

let val;
// simple maths operator
val = numb1 + numb2;
val = numb1 * numb2;
val = numb1 - numb2;
val = numb1 / numb2;
val = numb1 % numb2;
//Math object
val = Math.PI;
val = Math.round(2.5);
val = Math.ceil(2.2); // forcefully round up
val = Math.floor(2.5); // forcefully round down
val = Math.sqrt(64); // square rooth
val = Math.abs(-2); // gives a positive number
val = Math.pow(8, 2);
val = Math.min(33,3,2,1,5,6,88, 4, 5,93); // return min
val = Math.max(88, 7, 9, 55, 2, 7, 93, 97); // return max

val = Math.random(); // return a random number
val = Math.floor(Math.random() * 20 + 1);

console.log(val);

*/

/*
// TEMPLATE LITERALS 
const name = 'John Doe';
const age = 22;
const job = 'web developer';
const city = 'Abuja';

const numbers = [4, 77, 1, 88, 9, 33, 52, 12, 98];

*/

// Arrays 

const fruits = ['Apple', 'Banana', 'orange', 'pear'];
const numbers = [83, 33, 8, 4, 1, 9, 6, 7];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:3}, new Date()];

let val;

val = numbers.length; // get the length of an array
val = Array.isArray(numbers); // check if is an array
val = numbers[0]; // Get single value
// Arrays are immutable it can only be modified
numbers[3] = 77; // insert into an array
val = numbers.indexOf(33); // find index of 
//  Mutating array
numbers.push(277); // add on to the end of an array
numbers.unshift(67); // add on to the front of an array
numbers.pop(); // take off from end of an array
numbers.shift(); // take off from front
numbers.splice(1, 1); // splice out values
numbers.reverse(); // reverse an array
val = numbers.concat(fruits); // concate or join two arrays together
// val = fruits.sort(); // sorting arrays
val = numbers.sort(); // sorting arrays
// use the compare function to sort numbers 
val = numbers.sort((x, y) => {
    return x-y;
});

val = numbers.sort((x, y) => {
    return y - x;
});




console.log(numbers)
console.log(val)