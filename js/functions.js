/**
 functions are blocks of code that can be defind and then called then on in later on or in
 some cases defind and called them at the same time
 there are different ways to define a function, these are function declearation function expression and EEFIs
 */

//  function declearation
function greet(firstName='Chris', lastName='Vancis'){
    return `hello ${firstName} ${lastName} hope you're doing great` // usually we return things from functions
}

const resulOfGreet = greet('John', 'Doe');
console.log(resulOfGreet);

// Function Expression is basically putting a funtion as a variable assignment

const square = function(x = 3){
    return x*x;
};

console.log(square(4));

// IMMEDIATLY INVOKEABLE FUNCTION EXPRESSION

(function(){
    console.log('Login please');
})();

// properties and method;

const calC = {
    squaRoot: function(x){
       return x * x
    },

    add: function(y){
        let anser;
        if(y/2!==0){
           anser = `Sorry ${y} is not divisible by 2`;
        }else{
            anser = `Congrate ${y} is divisible and your answer is ${y/2}`;
        }
        return anser;
    }
}

const result = calC.squaRoot(9);
const check = calC.add(8);
console.log(check)
console.log(result);

function rollDice(){
    let roll = Math.floor(Math.random() * 20 + 1);
    console.log(`Rolled: ${roll}`);
}

rollDice();
// One important note about function statement is that they end function excution
function add(x) {
    return x + x;
}

function isPurple(color) {
    if(color.toLowerCase() === 'purple') {
        return 'Thank you. Your color match is purple'
    }
    return `Try Again ${color} is not a good color for the event`
}

console.log(isPurple('purplE'))

function isGreen(color){
    return color.toLowerCase === 'green';
}

function containsGgreen(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'mangenta'){
            return true
        }
    }
    return false
}

console.log(containsGgreen(['green', 'pink', 'blue', 'mangenta']));

function isValidPassword(pss, userName){
    if(pss.length < 8 && pss.contain(!userName)){
        message = 'Sorry password must be at least 8 Character Long';
    } else {
        message = 'Password is strong'
    }
    return message
}

console.log(isValidPassword())