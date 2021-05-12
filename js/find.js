/**
 * another array method that accept a call back is find(); it sounds pretty much as it sounds
 * it finds and retrieve element from an array 
 *  */ 

const movies = [
    'The Fantastic Mr. Fox',
    'Mr. and  Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr Deeds'
];

console.log(movies);

const movieChoice = movies.find((movie) => {
    return movie.includes('Mrs');
})

console.log(movieChoice);

// lets find one that start with mrs at the begining. that is one that start with mrs at the indexOf 0

const movie2 = movies.find((movie) => movie.indexOf('Mrs') == 0);

console.log(movie2)


console.log('mrs smith ton'.indexOf('mrs'));

// if i wanna find a book with a rating greater than 4.3 using find()

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry pratchett', 'Neil Gaiman'],
        rating: 4.24
    },
    {
        title: 'Bone: The complete edition',
        authors: ['Jeff Smith'],
        rating: 4.34
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

const bestBook = books.find((book) => book.rating > 4.3);
const neilBook = books.find((book) => book.includes('Neil Gaiman'));

console.log(bestBook);