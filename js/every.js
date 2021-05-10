/**
 * Every and some are boolean method. They return true or false after they run.
 * Every(): is going to accept a call back a test function function which itself return true or false
 * it runs that function on every element in the array. and if it get true for every element then the function
 * will return true
 * 
 */

// lets check for every word if it has a length of 3. Using an array methods every();
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const allLeters = words.every((word) => word.length === 3);
console.log(allLeters)

// let check if the array all contains the letter g at the end

const lastOfIndex = words.every((word) => {
    return word[word.length -1] === 'g';
})

console.log(lastOfIndex)

//  Another array method some() only cares if one of the element returns true.

const isWordWithD = words.some((word) => word[0] === 'd');

console.log(isWordWithD);

