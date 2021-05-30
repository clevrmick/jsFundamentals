const btn = document.querySelector('.clear-tasks');
// console.log(btn);

btn.addEventListener('click', function(e) {
    console.log('hey you clicked me');

    let val;
    val = e;
    val = e.type;
    val = e.target // target the specific event 
    val = e.target.classList; // get the classList of the targeted event 
    val = e.target.textContent = 'Heloo dont touch'; // change the text of the targeted event

    val = e.offsetX;

    e.style.color = 'red';


    console.log(val)

    // e.preventDefault();
})