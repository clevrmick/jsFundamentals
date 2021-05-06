/**
 * A callBack function is a function passed into another function as an argument, which is then invoked 
 * inside the outter function
 * A thones of built in function require it we passed a callBack function. and a thones of array method
 * have this already. most often times we pass in a callBack function as an ananymous function. A one time
 * use function
 * (a function without a name )
 * Arrays come with many built in method that accept callBack functions as an argument forEach(); map();
 *  filter(); find(); reduce(); some(); every();
 */

function sayHi() {
    alert('hello world')
}

// setTimeout(function(){
//     alert('great work')
// }, 2000) 

function greet(func) {
    func();
    func();
    func();
}

greet(sayHi);