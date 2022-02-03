//* 9. Use Destructuring Assignment to Extract Values from Objects
// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object
// Consider the following ES5 code:
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
// Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { name, age } = user;

//* 10. Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
// you can read it as:
// "get the value of user.name and assign it to a new variable named userName"
// "get the value of user.age and assign it to a new variable named userAge"

//* 11. Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
    johnDoe: { 
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
// extract the values of object properties and assign them to variables with the same name
const { johnDoe: { age, email } } = user;
// assign an object properties' values to variables with different names
const { johnDoe: { age: userAge, email: userEmail } } = user;

//* 12. Use Destructuring Assignment to Assign Variables from Arrays
// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to variables.
// Destructuring an array lets us do exactly that:
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1,2
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1,2,5

// example: swapping values using destructuring assignment 
let a = 8, b = 6;
[b, a] = [a, b];

//* 13. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// The result is similar to Array.prototype.slice()
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1,2
console.log(arr); // [3,4,5,7]

//* 14. Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
// above code can be done in-place
const profileUpdate = ({ name, age, nationality, location }) => { };
// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function

//* 15. Create Strings using Template Literals
// A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
// We could insert multi line strings without \n, we can insert variables and expressions and wrap it with ${ }, backticks are used in place of ' or " 
const person = {
    name: "Zoe Wees",
    age: 20
};
const greeting = `Hello my name is ${person.name}. 
I am ${person.age} years old.`
console.log(greeting);
// Hello my name is Zoe Wees.
// I am 20 years old.

// Example:
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let items of arr) {
        failureItems.push(
            `<li class="text-warning">${items}</li>`
        );
    };
    return failureItems;
}
console.log(makeList(result.failure));
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

//* 16. Write Concise Object Literal Declarations Using Object Property Shorthand
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
// getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x
const getMousePosition = (x, y) => ({ x, y });

//* 17. Write Concise Declarative Functions with ES6
// When defining functions within objects in ES5, we have to use the keyword function as follows:
const person = {
    name: "Arthur",
    sayHello: function () {
        return `Hello my name is ${this.name}`;
    }
}
// With ES6, you can remove the function keyword and colon altogether when defining functions in objects
const person = {
    name: "Jay",
    sayHello(){
        return `Hello my name is ${this.name}`;
    }
}