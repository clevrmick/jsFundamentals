/**
 * map is use to create a new array from an existing array
 * it can also be used to extract portions of an array or to somehow trasform an arry to a new array 
 * it accept a callBacks and calls that call back with every element but build a new array 
 * 
 * 
 * when a function returns nothing the value you get is undefined.... KeyNote; therefore map always 
 * takes the return value and stores it in a new array
 */


const numbers = [20, 21, 22, 23, 24, 25, 26];
const words = ['asap', 'byop', 'rsvp', 'dily'];


const double = numbers.map(function(number) {
    return number * 2;
});

console.log(double);

//  A different example of map function

const numbDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 == 0
    }
});

console.log(numbDetail);

// if i want to map out just the title of the object in this array

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry pratchett', 'Neil Gaiman'],
        rating: 4.24
    },
    {
        title: 'Bone: The complete edition',
        authors: ['Jeff Smith'],
        rating: 4.24
    },
    {
        title: 'American gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentle man in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }


];

const bookTitles = books.map(function(book) {
    return book.title;
});

console.log(bookTitles);

//  Arrow functions works exactly same way as any other function works. the difference is in this key word

// const square = function(n) { //regular function
//     return n * n;
// }

const square = (n) => { // Arrow function
    return n * n;
}

const isEven = (x) => {
    return x % 2 == 0;
}

console.log(isEven(99));

const multiply = (x , y) => x * y;

console.log(multiply(98, 3));

// Applying arrow function to map

const randomNumber = numbers.map((number) => {
    return number * 5;
});

console.log(randomNumber);

//  to map odd and even number from the array numbers using arrow function in map

const isEvenorOdd = numbers.map((number) => {
    return number % 2 == 0 ? `${number} even` : `${number} odd`;
});
console.log(isEvenorOdd);


