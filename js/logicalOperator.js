let rating = 3;

if (rating === 3) {
    console.log('Congratulations You are a super star')
}
else if (rating === 2) {;
    console.log('Meet Expectation')
}
else if (rating === 1){
    console.log('Needs improvement');
}
else {
    console.log('Invalid Rating')
}
/*
let password = 'user1212'

if (password.length >= 7) {
    if (password.indexOf(' ') === -1){
        console.log('Valid password');
    }
    else {
        console.log('password is long enough but must not contain spaces');
    }
}
else {
    console.log('Password must be longer');
}
*/
// All values have an inherent truthy or falsy boolean value
// falsy values: false 0 emepty string ' ' Null undefined NaN everything else is truthy 

let loggedInUser = '';

if (loggedInUser) {
    consoele.log('You are logged in')
}
else {
    console.log('please log in')
}
// Loggical operator
let keyWord = 'kend'
if (keyWord.length >= 7 && keyWord.indexOf(' ') === -1) {
    console.log('valid keyword')
}
else {
    console.log('invalid keyword')
}

let age = '88';

if (age < 10 || age >=65) {
    console.log('Welcome Please Come In And Enjoy The Movie');
}
else {
    console.log('sorry you must pay')
}
// we can chain multuple OR Statement

let color = 'liliac';

if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('You selected a great choice of color')
}
else {
    console.log('please Select a Different choice of color')
}

// NOT ! Operator return true if the experession is false

let userLoggin = '';

if (!userLoggin) {
    console.log('sorry you are not loggin');
}

let flavour = 'cherry';

// if (flavour !== 'watermelon' && flavour !== 'cherry') {
//     console.log('we dont have that flavour');
// }
// else {
//     console.log('nice flavour')
// }


if (!(flavour === 'watermelon' || flavour === 'cherry')) {
    console.log('this flavour is not in our list')
}
else {
    console.log('sorry check in for a different flavour')
}

let password = 'sethanza';

// if (password.length >= 7) {
//     if (password.indexOf(' ') === -1) {
//         console.log('password is valide')
//     }
//     else {
//         console.log('password must not contain space')
//     }
// }
// else {
//     console.log('password must be longer')
// }


if (password.length >= 7 && password.indexOf(' ') === -1) {
    console.log('password is valid');
}
else if (password.length >= 7 && password.indexOf(' ') !== -1) {
    console.log('password must not contain empty space')
}
else {
    console.log('password must be longer')
}

// SWITCH

let day = 2;

// if (day === 1) {
//     console.log('MONDAY')
// }
// else if (day === 2) {
//     console.log('TUESDAY')
// }


switch (day) {
    case 1 :
        console.log('Hello today is monday');
        break;
    case 2:
        console.log('hello is Tuesday');
        break;
}


let colour = 'maroon';

// if (colour === 'purple') {
//     console.log('welcome come in')
// }
// else {
//     console.log('sorry this is not the color')
// }

switch (colour) {
    case 'purple':
        console.log('welcome to the event');
        break;
    case 'pink':
        console.log('you are closer to the color');
    case 'green':
        console.log('sorry this is not a democratic day');
        break;
    case 'black':
        console.log('sorry this color is not accepted');
        break;

    default:
        console.log('please check your color ipute');

}

// Tenary operator: is effective only when you have a simple evaluation of true or false

let number = 5;

// if (number === 7) {
//     console.log('Lucky')
// }
// else {
//     console.log('Slight lucky')
// }

number === 7 ? console.log('lucky') : console.log('try another');

let status = 'online';

// let colorStatus;

// if (status === 'offline') {
//     colorStatus = 'red';
// }
// else {
//     colorStatus = 'blue';
// }

// console.log(colorStatus);

let colorStatus = status === 'offline' ? 'red' : 'green';
console.log(colorStatus);