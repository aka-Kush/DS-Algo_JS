//* 1. Compare Scopes of the var and let Keywords
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function
// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, 
// statement, or expression, its scope is limited to that block, statement, or expression
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
// the console will display the values [0, 1, 2] and 3
// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable
var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}
console.log(printNumTwo()); // the console will display the value 3
// printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i
// and not the value i had when the function was created in the for loop.
// The let keyword does not follow this behavior
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}
console.log(printNumTwo()); // the console will display the value 2
console.log(i); // the console will display error that i is not defined
// i is not defined because it was not declared in the global scope. It is only declared within the for loop statement
// example of let scope
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//* 2. Mutate an Array Declared with const
// Objects assigned to a variable using const only prevents reassignment of the variable identifier but they are still mutable
const s = [5, 6, 7];
s = [1, 2, 3]; // error
s[2] = 45;
console.log(s); // it will display the value [5, 6, 45]


//* 3. Prevent Object Mutation
// const declaration alone doesn't really protect your data from mutation. 
// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation
// Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode
let obj = {
    firstName:"Slim",
    lastName:"Shady"
};
Object.freeze(obj);
obj.firstName = "Marshall";
obj.middleName = "Bruce";   
console.log(obj); 
// The obj.firstName and obj.middleName assignments will result in errors, because our editor runs in strict mode by default,
// and the console will display the value { firstName: "Slim", lastName: "Shady" }

//* 4. Use Arrow Functions to Write Concise Anonymous Functions
// We often don't need to name our functions, especially when passing a function as an argument to another function. 
// Instead, we create inline functions.We don't need to name these functions because we do not reuse them anywhere else
const myFunc = function() {
    const myVar = "value";
    return myVar;
}
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
// This helps simplify smaller functions into one - line statements:
const myFunc = () => "value";

//* 5. Write Arrow Functions with Parameters
// Just like a regular function, you can pass arguments into an arrow function.
const double = (num) => num * 2;
double(4);
// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted
const double = num => num * 2;
// It is possible to pass more than one argument into an arrow function
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

//* 6. Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified (it is undefined)

//* 7. Use the Rest Parameter with Function Parameters
// With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can
// be accessed later from inside the function
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

// Using reduce function we can reduce array into single value which is sum in our case
// reduce function takes 2 argument, first => callback function and second => initialValue

// here initially accumulator is 0 and currentValue is idx 0 of array
// currentValue keeps increasing idx and is added to accumulator
// finally accumulator is returned as sum
const numbers = [1, -1, 2, 1];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 3
// breakdown:
// a=0, c=1 => a=0+1=1
// a=1, c=-1 => a=1-1=0
// a=0, c=2 => a=0+2=2
// a=2, c=1 => a=2+1=3

// example: create a sum function using the rest parameter in such a way that sum is able to take any number of arguments and return their sum
const sum = (...args) => {
    return args.reduce((a,c) => {
        return a+c;
    },0);
}
console.log(sum(3,5)); // 8

//* 8. Use the Spread Operator to Evaluate Arrays In-Place
// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // 89
// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array

// The spread operator makes this syntax much better to read and maintain.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // 89

// The spread operator only works in-place, like in an argument to a function or in an array literal
// const spreaded = ...arr; // this code will not work