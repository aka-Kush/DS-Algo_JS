//* 24. Create an Export Fallback with export default
// There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being
// exported from a file. It is also used to create a fallback value for a file or module
export default function add(x, y) {
    return x + y;
} // named function
export default function(x, y) {
    return x + y;
} // anonymous function
//! Since export default is used to declare a fallback value for a module or file, you can only have one value be a
//! default export in each module or file. Additionally, you cannot use export default with var, let, or const

//* 25. Import a Default Export
// To import a default export, you need to use a different import syntax.
// In the following example, add is the default export of the math_functions.js file
import add from "./math_functions.js";
// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
// add here is simply a variable name for whatever the default export of the math_functions.js file is.
// You can use any name here when importing a default

//* 26. Create a JavaScript Promise
// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously.
// When the task completes, you either fulfill your promise or fail to do so
// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise
const myPromise = new Promise((resolve, reject) => {
    // code here
});

//* 27. Complete a Promise with resolve and reject
// A promise has three states: pending, fulfilled, and rejected
// pending state is a way to complete the promise
// resolve is used when you want your promise to succeed, and reject is used when you want it to fail
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
});

//* 28. Handle a Fulfilled Promise with then
// Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous),
// often a server request.When you make a server request it takes some amount of time, and after it completes you usually want to do 
// something with the response from the server.This can be achieved by using the then method.The then method is executed immediately 
// after your promise is fulfilled with resolve
const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
    if(responseFromServer) {
        resolve("We got the data").then(result => {console.log(result);});
    } else {  
        reject("Data not received");
    }
});
// result comes from the argument given to the resolve method

//* 29. Handle a Rejected Promise with catch
// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called
const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data").then(result => {console.log(result);});
    } else {  
        reject("Data not received").catch(error => {console.log(error);});
    }
});
// error is the argument passed in to the reject method