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


console.log(val)