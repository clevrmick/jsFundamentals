// eventListener listens to a particular events

// document.querySelector('.clear-tasks').addEventListener('click', ((e) => {
//     console.log('Hellow world');
//     e.preventDefault();
// }));

document.querySelector('.clear-tasks').addEventListener('click', runEvent);

function runEvent(e) {
    // console.log('hello world');
    let val;
    val = e;
    val = e.target; // gives you the click event
    val = e.target.id // gives you the click event id
    val = e.target.className; // gives you the event className
    val = e.target.classList; // gives you the event classList

    // val = e.target.textContent = 'hello world'; // changes the event clicked textContent
    

    e.preventDefault();
    console.log(val)
}