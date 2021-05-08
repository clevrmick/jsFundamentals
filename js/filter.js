/**
 * Filter allows us to filter out subset of an array: Basically we pass in a function which return true or false 
 * a test function. and if an element passes that function it will be added into the return or the result array
 * it doesent update the original it doesnt mutate it we are just creating a copy with a specific target information
 * 
 * 
 */

const numbers = [88, 34, 57, 67, 54, 109, 102, 32, 9];

    // doing it with function

// function OddNumbers(arr) {
//     let oddofNumber = []
//     for (let number of arr) {
//         if (number % 2 === 1) {
//             oddofNumber.push(number)
//         }
//     }
//     return oddofNumber
    
// }

// console.log(OddNumbers(numbers));

// doing it with forLoop
// let odd = []
// for(let number of numbers) {
//    if (number % 2 === 1) {
//        odd.push(number)
//    }
// }

// console.log(odd)

    //  doing it with filter

const oddNumbers = numbers.filter((number) => number % 2 === 1);
const evenNumber = numbers.filter((number) => number % 2 === 0);

console.log(oddNumbers);
console.log(evenNumber);
console.log(numbers); // the original arry of Numbers is not change it imutable 