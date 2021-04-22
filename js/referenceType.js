/*
When we are working with premitive type and we create a variable to store one 
we are creating a value type Variable. What that means is that in memory javascript store every sing variable we
create in memory that is the actual value are stored in memory.

when we creat a variable with a premitive type as the value what actual happen is that the value is stored in
momory but that is not the case in reference type because most reference type hold tons of information
with them so instead of storing all those informtion inMemory what javascript does is it stores
 a reference to that variable and you can think of that refernce as a memory address that we can see.
 therefore something to take away here is that when we are working with a refernce type and we creat a 
 variable to hold them the variable it self does not hold the value it holds an arrow a pointer a refrence
 to where the value is inMemory. Compared to a value type variable where the actual value is stored


 one more time: primitve type are stored as the actual value in the variable refrence type the variable stores
 a refrece to where that actual value is in memory
 */

let fruit = 'Bananna';
let color = fruit;

fruit = 'Orange';

console.log(fruit, color);


// example

let numbers = [7, 8, 1, 9, 5, 88];

let newNumber = numbers

console.log(numbers, newNumber);
// what is actually happing here is 
//  numbers = 988777499 // the referece type is acutall ponting to an address as a refrence in memory
// and when assigned back to a different variable newNumber the new variable is also pointing to the 
// same address newNumber = 988777499
newNumber.push(78);
console.log(numbers, newNumber)