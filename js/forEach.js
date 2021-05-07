// forEach method accept a callBack function

const numbers = [20, 21, 22, 23, 24, 25];

numbers.forEach(function(number) {
    console.log(number * 2);
})

function tripple(number) {
    console.log('numbers are as follows:', number * 3);
}

numbers.forEach(tripple);

function double(arr) {
    for (let i = 0; i < arr.length; i++) {
       console.log(arr[i] * 2);
    }

}


double(numbers);
// const result = double(numbers);
// console.log(result)

//  Another example

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry pratchett', 'Neil Gaiman'],
        rating: 4.24
    },
    {
        title: 'Bone: The complete edition',
        authors: ['Jeff Smith'],
        rating: 4.24
    },
    {
        title: 'American gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentle man in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }


]

books.forEach(function(book) {
    let title = book.title;
    console.log(title);
})