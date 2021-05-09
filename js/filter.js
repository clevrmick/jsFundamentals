/**
 * Filter allows us to filter out subset of an array: Basically we pass in a function which return true or false 
 * a test function. and if an element passes that function it will be added into the return or the result array
 * it doesent update the original it doesnt mutate it we are just creating a copy with a specific target information
 * 
 * 
 */
// filter for odd and even Numbers and bigger Numbers (numbers bigger than 50 )
const numbers = [88, 34, 57, 67, 54, 109, 102, 32, 9];

    // doing it with function

// function OddNumbers(arr) {
//     let oddofNumber = []
//     for (let number of arr) {
//         if (number % 2 === 1) {
//             oddofNumber.push(number)
//         }
//     }
//     return oddofNumber
    
// }

// console.log(OddNumbers(numbers));

// doing it with forLoop
// let odd = []
// for(let number of numbers) {
//    if (number % 2 === 1) {
//        odd.push(number)
//    }
// }

// console.log(odd)

    //  doing it with filter

const oddNumbers = numbers.filter((number) => number % 2 === 1); // filter odd numbers. non divisible by 2
const evenNumber = numbers.filter((number) => number % 2 === 0); // filter even numbers. divisible by 2
const bigNumber = numbers.filter((number) => number > 50); // filter number larger than 50

console.log(oddNumbers); // filter odd numbers. non divisible by 2
console.log(evenNumber); // filter even numbers. divisible by 2
console.log(bigNumber); // filter number larger than 50
console.log(numbers); // the original arry of Numbers is not change it imutable 

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry pratchett', 'Neil Gaiman'],
        rating: 4.25,
        generes: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zaddie Smith'],
        rating: 3.83,
        generes: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The complete edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        generes: ['fiction', 'graphc', 'fantasy']
        
    },
    {
        title: 'American gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        generes: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentle man in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        generes: ['fiction', 'historical fiction', 'fantasy']
    },
    {
        title: 'The Name of the wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        generes: ['fiction', 'fantasy']
    },
    {
        title: 'The Oversotory',
        authors: ['Richard Powers'],
        rating: 4.19,
        generes: ['fiction', 'short stories']
    },
    {
        title: 'The Way Of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        generes: ['fiction', 'Epic']
    },
    {
        title: 'Lord Of The Flies',
        authors: ['William Golding'],
        rating: 3.67,
        generes: ['Fiction']
    }


]

console.log(books);

// lets filter books that the rating is higher than 4.3

const goodBooks = books.filter((book) => book.rating > 4.3); // filter book that its rating is higher tha 4.3 
console.log(goodBooks);

// let's filter for book that contains a genere of fantasy

const fantasyBooks = books.filter((book) => ( // filter for book that includes fantasy
    book.generes.includes('fantasy')
))

console.log(fantasyBooks);

// let's filter for book that either contains short stories or essays 

const shortForms = books.filter((book) => (
    book.generes.includes('short stories') || book.generes.includes('essays')
))

console.log(shortForms);

// let create a search key work that start with the


const query = 'the';

const result = books.filter((book) => {
    // return book.title.toLowercase().includes(query.toLowerCase())

    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
})

console.log(result);