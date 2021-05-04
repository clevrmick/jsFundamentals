// A while loop continues to run as long as its tests condition is true
// example in for loop 

for (let i = 0; i < 5; i++) {
    console.log(`This is loop in forLoop ${i}`);
}

// example in while loop

let j = 0;

while (j < 5) {
    console.log(`This is loop in whileLoop ${j}`);
    j++;
}

// nested Loop

for (let i = 0; i <= 10; i++) {
    console.log('OutterLoop');
    for (let j = 10; j > 0; j-=2) {
        console.log('  Inner Loop')
    }
}

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

// to sum all the values i need to loop twice. 
let totalScore = 0
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    // console.log(row);
    for (let j = 0; j < row.length; j++){
        // console.log(row[j])
        totalScore += row[j];
    }
}
console.log(totalScore);

// whileLoop excels when you're writing a loop that you don't know how many times is going to run
