/**
 * 
 * Reduce takes an array of values and reduces down to a single value: Reduce accept a callBack with 
 * two parameters the first parameter is called an acumulator and the second is called the current value 
 * The first parameter stores the end result of reduce. The currentValue represent each of the individual 
 * element in the array. The first parameter will store the total value or the accumulated value we are 
 * reducing down to. The accumulator variable will always start as the current element in the array and 
 * currentValue start as the next element 
 */

const numbers = [3, 5, 7, 9, 11];
const product = numbers.reduce((acm, currVal) => acm + currVal); // multiply all numbers together and return the total
console.log(product);

// we can also think of reduce as taking a bunch of value and we are reducing down it a single value.



/**
 * We can also use the reduce function to find the maximum value in an array
 * Where the accumulator is really just tracking the max
 */

 const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
 const maxGrade = grades.reduce((acm, currtVal) => currtVal > acm ? currtVal: acc) // check if the current value is greater than the current max
 
 console.log(maxGrade)
