const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('mouseover', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent); // click and hold firs up the mousedown event
// clearBtn.addEventListener('mouseup', runEvent); // click and hold firs not the mouseup event but when released
// card.addEventListener('mouseenter', runEvent); // event firs up when mouse enetered
// card.addEventListener('mouseleave', runEvent); // event fires up when mouse leave
// card.addEventListener('mouseover', runEvent) // fires up when you enter inside a different element of the same div
// card.addEventListener('mouseout', runEvent) // fires up when you leave inside a different element of the same div
// card.addEventListener('mousemove', runEvent) // fires up when there is any movement of mouse in that dom


function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY ${e.offsetY}`
}
