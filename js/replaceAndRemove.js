// replace element: first we need to create the element and it text node

const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

// how to remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);


// class and Attrb

const firstLi = document.querySelector('ul li:first-child');
// const link = firstLi.children[0];
const link = firstLi.firstElementChild;
//  Classes
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('testing'); // adding a class
val = link.classList.remove('testing'); // removing a class

val = link

// Attributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://www.google.com');
val = link;
val = link.hasAttribute('href')
val = link.setAttribute('title', 'facebook');
val = link;
link.removeAttribute('title')



console.log(val)