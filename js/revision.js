const numbers = [3, 5, 7, 9, 11];

const total = numbers.reduce((acm, currVal) => {
    return acm + currVal
})
console.log('The result of the sum is: ',total);


let totals = 0;
for (let number of numbers) {
    console.log(totals += number);
}

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];


const highestGrade = grades.reduce((acm, currVal) => currVal > acm ? currVal : acm)

// const maxGrade = grades.reduce((acm, currVal) => {
//    if (currVal > acm) {
//        return currVal;
//    } 
//    else {
//        return acm;
//    }
// })

// console.log(`The maximum grades is ${maxGrade}`)
console.log(`The maximum grades is ${highestGrade}`)