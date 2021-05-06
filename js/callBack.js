function sayHi() {
    alert('hello world')
}

// setTimeout(function(){
//     ale
// }, 2000) 

function greet(func) {
    func();
    func();
    func();
}

greet(sayHi);