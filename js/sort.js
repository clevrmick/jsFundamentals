/**
 * the sort array method don't really sort things properly until we
 *  have to pass what is called the campare function, now this compare function have 2 parameters a and b
 *  which returns a value, a number, if the function returns a nagative number the 
 * function will sort a before b if it returns value greater than 0 it will sort b before a if is 0 
 * it remains unchanged
 */

const prices = [400.50, 3000, 99.99, 35.99, 89, 59];

prices.sort();

console.log(prices);

const ascSort = prices.sort((a, b) => a - b);
// const descSort = prices.sort((a, b) => b - a);

console.log(ascSort);

