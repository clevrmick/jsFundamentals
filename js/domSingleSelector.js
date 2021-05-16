// Dom selector are document object method that allows us to basically pull things from the dom
// we have multiple different selectors that can be categorize into 2 different type: Single and 
// multiple selector: Single element selector will allow you to grab a single element by it id or it class
// if we use single selector on a class or element that appears morethan once in the dom it just gonna grab the 
// first one then multiple element selector will acutally get all of the elements with that class and then
// return an html collection or node list depending on the selector that you'll use 

                    // document.getElementById() : does exactly as it name implies
console.log(document.getElementById('task-title'));
// let see other couple of things that we can do when we select an element
console.log(document.getElementById('task-title').id) // get the id of the element
console.log(document.getElementById('task-title').className); // get class name of the element

// we can also do things to the sytling of the element 
const taskTitle = document.getElementById('task-title');

taskTitle.style.background = '#333'; // change the background color
taskTitle.style.color = '#fff'; // change the color
taskTitle.style.padding= '5px'; // change the padding 
// document.getElementById('task-title').style.display= 'none'; // make an element invisible


// YOU CAN ALSO CHANGE THE CONTENT
taskTitle.textContent = 'Task List'; // change the text content
taskTitle.innerText = 'Task List'; // additional property to changing text content
taskTitle.innerHTML = '<span style="color: blue">Task-List</span>';

// another newer single selector is called document.querrySelector(); newer and powerfull it actuall takes
// any css selector be it id, tag, or class, 

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

console.log(document.querySelector('li'));
document.querySelector('li').style.background = 'green'; // queryselector only select the first Element
document.querySelector('ul li').style.background = 'blue'; // we can go level of elemennt using querySelector
// we can therefore use css pseudo class to target a specific element in the of the li

document.querySelector('ul li:nth-child(3)').style.color = 'red';
// even if we have to use the pseudo odd and even to style an element using querySelector: it only going to select
// the first odd number cuz is a single element selector

document.querySelector('ul li:nth-child(odd)').style.background = 'orange';









