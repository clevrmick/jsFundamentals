// for (let i = 0; i <= 10; i++) {
//     console.log('seth', i);
// }

// let examScore = [88, 33, 23, 45, 99, 77, 56, 87];

// let total = 0
// for (let i = 0; i < examScore.length; i++) {
//     let scores = examScore[i];
//     total += scores
// }

// console.log('the total score of the student is ' + total);
// console.log('the average student scores is ' + total/examScore.length);

// // create an array of object of mystudent
// const myStudent = [
//     {
//         firstName: 'Zeus',
//         grade    : 86
//     },
//     {
//         firstName: 'Artemis',
//         grade    : 97
//     },
//     {
//         firstName: 'Hera',
//         grade    : 72
//     },
//     {
//         firstName: 'Apolo',
//         grade    : 90
//     },
// ];

// for (let i = 0; i < myStudent.length; i++) {
//     let student = myStudent[i].firstName;
//     let grades = myStudent[i].grade;
//     console.log(student + ' scored ' + grades);
// }

// for (let i = 0; i < myStudent.length; i++) {
//     let student = myStudent[i];
//    console.log(student.firstName + ' scored ' + student.grade );

// }

// for (let i = 0; i < 5; i++) {
//     console.log(i, 'outer loop');
//     for (let j = 0; j < 5; j++) {
//         console.log('inner Loop', j)
//     }
// }


// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];

// //  for of loop: this is a mordern synthanx method of looping throuhg an array
// let cars = ['toyota', 'Honda', 'Benz', 'ford'];

// for (let car of cars) {
//     console.log(car);
// }

// const numbers = [1, 4, 7, 99, 6, 77];

// for (let number of numbers) {
//     console.log(number)
// }

//  example of forLpop


// let userInput = prompt('Please enter your date of birth');
// let currentYr = 2021;
// let userAge = Number((currentYr - userInput));
// console.log(userAge);

// while (true) {
//    prompt('Please enter your date of birth');
//    if (userAge > 0 && userAge < 19) {
//     console.log('sorry your too young for this')
//    }
// }

// const myStudent = [
//     {
//         firstName: 'Zeus',
//         grade    : 86
//     },
//     {
//         firstName: 'Artemis',
//         grade    : 97
//     },
//     {
//         firstName: 'Hera',
//         grade    : 72
//     },
//     {
//         firstName: 'Apolo',
//         grade    : 90
//     },
// ];


// let total = 0;



// for (let i = 0; i < myStudent.length; i++) {
//     let student = myStudent[i];
//     console.log(student)
// }

// let sum = 0;

// for (let student of myStudent) {
//     console.log(`${student.firstName} scored ${student.grade}`)
// }




// function add(x, y) {
//     return x + y;
// }

// const subtract = function(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const divide = function(x, y) {
//     return x /y
// }


// const operation = [add, subtract, multiply, divide];

// console.log(operation[0](4, 9));


// for (let func of operation) {
//    console.log(func(8, 9));
// }

// const calc = {
//     addition: add
// }

// calc.addition(6, 8)


function multiply(num) {
   return function(x) {
        return x * num;
    }
}


const triple = multiply(4);
// console.log(tripple(5));

function makeBetweenFunc(x, y) {
    return function(numb) {
        return (numb >= x && numb <= y);
    }
}

const isChild = makeBetweenFunc(0, 20);

console.log(isChild(78));

const isNiceWeather = makeBetweenFunc(60, 80);
console.log(isNiceWeather(100));

