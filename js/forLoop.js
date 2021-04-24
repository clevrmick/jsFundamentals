// for loop is just a repetition of a certain code. a code running over a certain period of time till a condition is met

for (let i = 0; i <= 10; i++) {
    console.log('Hello', i);
}

// infinig loop

// for (let i = 1; i !== 20; i += 6) {
//     // console.log('infit loop');
// }

let examScores = [22, 45, 88, 54, 92, 90];

for (let i = 0; i < examScores.length; i++) {
    console.log(examScores[i], i);
}

const myStudent = [
    {
        firstName: 'Zeus',
        grade    : 86
    },
    {
        firstName: 'Artemis',
        grade    : 97
    },
    {
        firstName: 'Hera',
        grade    : 72
    },
    {
        firstName: 'Apolo',
        grade    : 90
    },
];

for (let i = 0; i < myStudent.length; i++) {
    let student = myStudent[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

// looping opposite from the end

const word = 'bles';
let reversedWord = '';

for (let i = word.length -1; i > 0; i--) {
    //  console.log(i)
    console.log(reversedWord += word[i]);
}

// lets average the student scores 

const myStudentResult = [
    {
        firstName: 'Zeus',
        grade    : 86
    },
    {
        firstName: 'Artemis',
        grade    : 97
    },
    {
        firstName: 'Hera',
        grade    : 72
    },
    {
        firstName: 'Apolo',
        grade    : 90
    },
];

let total = 0;
for (let j = 0; j < myStudentResult.length; j++) {
    let studentGrad = myStudentResult[j];
    total += studentGrad.grade;
}
console.log(total/myStudentResult.length);