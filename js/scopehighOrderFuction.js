// scope is all about variable visibility
/* All about the location where a variable is defined or located
Where we have access to that variable and the first type of scope is called a function scope
declearing a variable in a function is scoped to that function it is called function scope

 */

// function Scope

function lol() {
    let person = 'Tom';
    const age = 70;
    var color = 'teal';
    console.log(age)
}
function changeColor() {
    let person = 'James';
    const age = 19;
    var color = 'purple';
    console.log(age)
}

lol();
changeColor();

// console.log(age);

let bird = 'mandarin duck'; // global scope
let item = 'milk';

function birdwatch() {
    let bird = 'Golden pleasant' // function scope
    console.log(bird);
    // item = 'suga'
    // console.log(item)
}

console.log(bird);
birdwatch();

//  block scope: a variable decleared inside a curly braces is a block scope. for,while,if, is scoped to the block

// if (true) {
//     let animal = 'eel' // block scoped
//     console.log(animal);
// }
                // using var 
                // using var in any scope to declear a variable is not scoped to that block 
                // let and const have different scoping rules than var
if (true) {
    var animal = 'eel' // block scoped
    console.log(animal);
}

console.log(animal);

//  comon problem with var

const animals = ['Bear', 'Dogs', 'lion'];
var i = 9;

for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log(i);

function doubleArr(arr) {
    const result = [];
    for (let numb of arr) {
        let double = numb * 2;
        result.push(double);
    }
    return result;

    // console.log(double) // you cannot access double
    // console.log(double);
}

console.log(doubleArr([1,2,3]));


var a = 1;
let b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('function scope', a, b, c)
// }

                // block scope
// if(true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('block scope', a,b,c);
// }

for (var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global scope', a,b,c);
// test();


// LEXICAL SCOPE: basically referes to the fact that nested functions are lexically bound to the scope of 
// there parent function. meaning a variable decleared in one function  which is the parent function 
// is lexically bound or available to other function withing it 

function outter() {
    let movie = 'Amadieus';

    function inner() {
        // console.log(movie);
        let movie = 'balckpanther';
        console.log(movie)
    }

    inner();
}

outter();