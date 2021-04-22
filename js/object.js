const person = {
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'Jondoe@gmail.com',
    hobbies: ['music', 'football', 'chess', 'reading'],
    address: {
        city: 'ikeja',
        state: 'Lagos'
    },
    getBirthYear: function(){
        return 1987
    }
}


let val;
val = person;
// get specific value
val = person.firstName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();


console.log(val)

// Object are collections of properties and properties are a key value pair
// Rather than accessing a data using an index, we use custom keys
/*
totalStep ----> 30877;;
totalMiles ---> 7877721;
averageCaloriesBurn ---> 547;
workOutThisWeek ----> '5 0f 7';
*/

const fitBitData = {
    totalSteps: 30877,
    totalMiles: 787721,
    averageCaloriesBurn: 5477,
    workOutThisWeek: '5 of 7',
    averageGoodSleep: '2: 13'
}

console.log(fitBitData.totalMiles);
console.log(fitBitData['workOutThisWeek']);
//you can assign a variable to an object value and access it through a square baracket notation
colorPallet = {
    red:   '#eb4d4b',
    yellow: '#f9ca20',
    blue:   '#3033cb'
}
let mystryNumber = 'red'

console.log(colorPallet[mystryNumber]);

// we can add to an object using dot notation or the square bracket as follows

const userReview = {};

userReview.queenBee = 4.9;
userReview['John Doe'] = 5.0;
userReview['Mr Smith'] = 3.0;



console.log(userReview);

// Nested array and object

const student = {
    firstName:  'John',
    lastName:   'Doe',
    strength:   ['Music', 'Art'],
    exams:  {
        midTerm: 82,
        final: 95
    }
};

console.log(student)
// array of object

const shoppingCart = [
    {
        product : 'MacBook',
        price   : 1200,
        quantity: 1
    },
    {
        product : 'Iphon',
        price   : 1400,
        quantity: 3
    },
    {
        product : 'iWatch',
        price   : 299,
        quantity: 2
    }
];

console.log(shoppingCart)

// javascript always store a reference to where that array or object is. object is a reference type 
