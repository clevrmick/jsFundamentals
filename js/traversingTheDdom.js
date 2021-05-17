// let's talk about traversing the dom: which basically mean moving up and down the dom parent and children of 
// a specific dom 

let val;

list = document.querySelector('ul.collection');
listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// lets get the children of the ul 
val = list.children; // get the children of the ul
val = list.children[0];
list.children[1].textContent = 'Hello';

// get children of children 

val = list.children[0].children // gives you the children of of a specific child

// in addition we aslo have firstElementChild that gives us the first element of a child as the name implies 
val = list.firstElementChild; // get first element of a child
val = list.lastElementChild; // same as the name implies
val = list.childElementCount; // counts numbers of chilren in a parent 

// just like we have done all this in children we can also do same with parent 

val = listItem.parentElement;
val = listItem.parentElement.parentElement;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // going up and down the dom(Traversing)



console.log(val);




