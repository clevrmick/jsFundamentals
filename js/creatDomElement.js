// creat Element

let li = document.createElement('li'); // create Element

li.className = 'collection-item'; // add class

li.setAttribute('new', 'item'); // add attribute

// lets creat a text inside and append it to the list of the list items

li.appendChild(document.createTextNode('hellow world'));

// append li as child to ul

const ul = document.querySelector('ul');
ul.appendChild(li);

// so lets create a link and append to li also with class

const link = document.createElement('a'); //create an achor tag
link.className = 'delete-item secondary-content'; // add a class to the anchor tag
link.innerHTML = '<i class="fa fa-remove"></i>;'; // add a delete icon using innerHtml

// lets now append the link to li

li.appendChild(link)

console.log(link)



console.log(li);
