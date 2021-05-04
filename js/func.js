function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
    // return roll;
}

// rollDice();

// for (let i = 0; i < 5; i++) {
//     console.log(`rolled: ${rollDice()}`);
// }
//  we can call function inside other function

function throwDice(numOfRoll) {
    for (let i = 0; i < numOfRoll; i++) {
        rollDice();
    }
    // rollDice();
    // rollDice();
    // rollDice();
    
}

throwDice(7);

function add(x, y) {
    return x + y;
}

console.log(add(3, 7));

function divide(a, b) {
    return a / b;
}

console.log(divide(2,4));

// the return statemet ends function excution and specifies the value to be returned by that function 
// its only when the return statement is excuted that it ends functions excutions

function square(number) {
    return number * number;
    console.log('All Done');
}

let val;
val = square(5);
console.log(val);

/*
function isPurple(color) {
    if (color.toLowerCase === 'purple') {
        return 'You selected purple';
    }
    else {
        return ` Sorry ${color} is not Purple. Try a different color`;
    }
}

const colorSelector = isPurple('purple');
console.log(colorSelector);

function isGree(colors) {
    return colors.toLowerCase() === 'green';
}

*/

// case scenerio when color is or contains purple or mangintal

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false
}

const items = containsPurple(['orange', 'blue', 'purple', 'pink', 'red', 'magenta']);
console.log(items);

/*
Challenge: 
Write a isValidpassword function.
It accept two argument: Password and UserName 
Password must:
- be at least 8 characters long
- must not contain spaces
- cannot contain username

// if all requrement are me. return true otherwise return false

*/

// function isValidPassword(password, username) {
//     if (password.length >= 8 || password.indexOf(' ') !== -1) {
//         if (password.indexOf(username) !== -1) {
//             return 'Welcome'
//         }
//     }
//     return 'sorry something went wrong. check your loggin info';
// }

// function isValidPassword(password, username) {
//     if (password.length < 8) {
//         return false
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false
//     }
//     if (password.indexOf(username) !== -1) {
//         return false
//     }
//     return true
// }

function isValidPassword(password, username) {
   const tooShort = password.length < 8;
   const hasSpace = password.indexOf(' ') !== -1;
   const tooSimilar = password.indexOf(username) !== -1;

//    if (tooShort || hasSpace || tooSimilar) return false;
//    return true;
                        // or 
// if (!tooShort && !hasSpace && !tooSimilar) return true;
//    return false;

                    // or
return !tooShort && !hasSpace && !tooSimilar;

}

const passKey = isValidPassword('manuffbez34', 'jeffbez');
console.log(passKey);

let result = 3 < 5 ? 'Login please' :  'check password'; // Tenary operator 
console.log(result)

//  challenge 

// write a function to find the average value in an array of numbers

function avg(arr) {
    let total = 0;
    //loop over each num
    for (let number of arr) {
        // add them together
        total += number;
    }
    //divide by number of numbs
    return `the average of the computed numbers is ${total / arr.length}`;
}

const resultAvg = avg([3, 10, 89, 66, 8]);
console.log(resultAvg);

// pengram: a game sentence that must inclcude all the character

function isPengram(sentence) {
    for (let char of 'abcdefghijklmn') {
        if (!sentence.includes(char)) {
            return false;
        }
    }
    return true
}

console.log(isPengram('the five boxing wizards jump quickly'));