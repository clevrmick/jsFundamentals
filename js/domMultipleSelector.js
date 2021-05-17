// Now lets talk about method that we can use to select multiple element in the Dom which can either return 
// a node list or an HTMLCollection which are both similar to an array except that there are certain thing 
// we can't do that we can do with a regular array but we can actually convert them into a regular array easily

// The first method is documenent.getElementsByClassName();

const items = document.getElementsByClassName('collection-item') // select all the className in the dom with 'collection-item';

console.log(items); // we can see they returned an html collection of an array and we can go level down each of the object

// if we want to access a specific one we can treat them as an array
console.log(items[0]); // gives us the first item. and we can do certain things to them
items[0].style.color = 'green' // change the color
items[3].textContent = 'Winners'; // changes the text content
//   we can be specific of an element to which we select 
const listItems = document.querySelector('ul').getElementsByClassName('li'); // // select classes that are only on theh ul
console.log(listItems); 


// we also have document.getElementsByTagName('li')  // select Elements by tag name and does same thing as previous
// Also kindly note that htmlCollection is not an array but can be converted to a real array to use array methods

let lis = document.getElementsByTagName('li');
console.log(lis);

// lis.reverse(); // it throws an error that is not a function: meaning it doesn't recognise it as an array 
//  therefore we can now convert it to an array
const list = Array.from(lis);
console.log(list);

list.forEach((li) => {
    console.log(li.className);
    li.textContent = 'hello'
});

// now lets look at the querySelectorAll() which does samething except that it return a nodeList
// a nodeList allows us to run array method without converting them

const allItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(allItems);

// lets change the collor of all the even and odd number in the list item

const liOdd = document.querySelectorAll('ul.collection li:nth-child(odd)');
const liEven = document.querySelectorAll('ul.collection li:nth-child(even)');

liOdd.forEach((li) => {
    li.style.background = '#ccc'
});






