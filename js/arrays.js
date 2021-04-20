let shoppingList = ['Iphone', 'iWatch', 'MacBook'];
console.log(shoppingList);

let studentNumbers = [90, 78, 55, 79, 77];
console.log(studentNumbers);

let myCollections = ['Iphone', true, NaN, 77, {street: '22 Ameriacan street', pobox: 478}, ['music', 'gaming'] ];
console.log(myCollections);

// Every item in an array has a corresponding index 
// and every array has a length property
// also the last index of an array is always the total length minus 1

console.log(shoppingList[2]);
console.log(myCollections[myCollections.length-1]);

// Modifying Array: Arrays are mutable unlike strings that are imutable

let movieList = ['12 Rounds', 'Alita', 'Green Land'];
movieList[0] = 'What men want'; // Note please that it changes the value but did not add unto

movieList[movieList.length] = 'Fast 9' ;
movieList[movieList.length] = 'All The Boys I Have Loved';

console.log(movieList);

// strings are imutable: 
let str = 'Brazil';
let newStr = str.toUpperCase();
console.log(newStr); // returns the uppercase but the original is unchanged
console.log(str);

// Array Method: 
// Push() add on to the end
// pop() remove from the end
//shift() add on to the front
// unshift() on from the front


//  these method returns an array which you can catch with a variable
// concat() used to merge 2 or more arrays
// includes() Look for a value
// indexOf() just like strings
// join() create a string from an array
// reverse an array
// slice copy portion of an array
// splice Remove/replace an elements
// sort() sort an array

let topPlayers = ['C.Ronaldo', 'L.Messi', 'Lewadoski'];
topPlayers.push('Gerrard');

let player = topPlayers.shift();
console.log(player)

console.log(topPlayers);

// concat
let fruits = ['Banna', 'Apple'];
let veggies = ['Asparagus', 'Brussel sprouts'];

console.log(fruits.concat(veggies)); // it create a new array and does not alter the original

// includes: is known as a boolean value it returns true or false. it tells you if an array icludes a certain value or not

let ingredents = [
    'Water',
    'Corn starch',
    'flour',
    'Cheese',
    'Brown sugar',
    'shrim',
    'eel',
    'butter'
];

console.log(ingredents.includes('Cheese'));


if (ingredents.includes('butter')) {
    console.log('Sorry i can\'t eat that. Too much calories');
}

// indexOf(): act as that of a strings gives you the positon on your index
console.log(ingredents.indexOf('eel'));
// reverse(): does exactly as the name sounds it reverses an array inplace: meaning it does not make a copy it mutate
// or change the orignal array

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

let alphabet = letters.reverse();
// console.log(alphabet, letters);
// join (): Creat and returns a new string by concatinating all of the elements in an array seperated by a comma,
//  or a specified seperator string

letters.join();// default will join them with a seperated comma.
console.log(letters)

// nested array is all about putting an array inside an array

const color = [
    ['crimson', 'blue'],
    ['Orange', 'Dark Organge'],
    ['Green', 'Olive']
]

console.log(color[1] [0]);
color[2][1] = 'Maroon';
let newColor = color[0][1] = 'Red';
console.log(newColor)
console.log(color)



