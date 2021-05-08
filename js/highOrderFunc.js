// function is an object, we can store it in a variable also in an arr 

function add(x, y) {
    return x + y;
}
const subtract = function add(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
const devide = function(x, y) {
    return x / y;
}

const operation = [add, subtract, multiply, devide]; //functions can be treated like other object and be stored in an array
console.log(operation[0]);
console.log(operation[0](7, 90));
// we can also loop through the array too. we can treat function as any other value, we can even store
// them in object

for (let func of operation) {
    let result = func(77, 88);
    console.log(result);
}

// HIGH ORDER FUNCTION : Are functions that accept other function as arguement and use them
// or functions that returns another function
                    // FUNCTION THAT ACCEPT OTHER FUNCTION AS AN ARGUEMENT
function callThreeTimes(f) {
    f();
    f();
    f();
}

function happy() {
    console.log('so happy :)')
}

const laugh = function() {
    console.log('haha haha haha..... hah')
}


callThreeTimes(happy)

function repeatNTimes(action, numb) {
    for (let i = 0; i < numb; i++) {
        action();
    }
}

repeatNTimes(happy, 8);


function picOne(f1, f2) {
    let rand = Math.random();
    console.log('generated:', rand)
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

picOne(happy, laugh);


                        //FUNCTION THAT RETURNS OTHER FUNCTION AS AN ARGUMENT
/**
 * previously we talked about one type of high order function, function that accept function as an 
 * argument. now lets talk about returning a functions from withing a function
 */

