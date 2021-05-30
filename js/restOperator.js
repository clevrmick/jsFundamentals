/**
 * The REST operator look same like the spread but is not because we use the same ...
 * REST behaves differently, it almost like the oposite of spread. What it does is 
 * instead of spreading data out into an argument or into a new object or an array
 * it actually collects things down into a single array
 * 
 * 
 * When we wanna make functions that accept unlimited numbers of argument or a variable numbers of argument
 * 
 * in every function we have access to something called arguments. it kind of looks like an array but is not 
 * an array 
 * 
 * function sum() {
 * console.log(arguments)
 * 
 * console.log(sum(1, 2, 3, 4))
 * }
 */

function sum() {
    const argsArr = [...arguments]
    return argsArr.reduce((total, curVal) => {
       return total + curVal
    });
}

console.log(sum(3, 4, 79, 90))