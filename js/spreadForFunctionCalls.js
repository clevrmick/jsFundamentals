/**
 * we have spread in a function call, spread in array literal, spread in object
 * Spread Ddoes many thing depending on the contex. the spread synthax allows an iterable such as an 
 * array to be expanded in place where zero or more key value pairs are expected. 
 * spread are always three dot(..) which means or behave somewhat different.
 * depending on the place there are used 
 */
//  it all has to do with expanding an iterable
                        // SPREAD IN A FUNCTION CALL: spread sythantically is always 3 dot and they behave 
        // differently depending on the place that you use it
        // when we use it in a function call inside parathesis it will take that iterable and break it up into
        //  individual argument rather than passing it a single argument

        const numbers = [4, 5, 7, 9]
        function giveMeFour(a, b, c, d) {
            console.log('a :', a);
            console.log('b :', b);
            console.log('c :', c);
            console.log('d:', d);
        }

        giveMeFour(...numbers); //use the 3 dots is spread across the argument
        // strings are iterable and can be spread but not on all cases


        // SPREAD IN AN ARRAY LITERAL: it create a new array using an exisiting array, spread the element
        // from one array into an existing one

        const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
        const gastropods = ['giant Africa snail', 'banna slug', 'variable neon slug'];
        const cnidaria = ['fire coral', 'moon jelly'];

        const molusca = [...cephalopods, ...gastropods];
        const invertBreat = ['fishTotle',...cephalopods, ...gastropods, ...cnidaria];

        console.log(molusca);
        console.log(invertBreat);

