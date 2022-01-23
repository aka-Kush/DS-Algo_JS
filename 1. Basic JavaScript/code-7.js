//* 92. Iterate with JavaScript While Loops
// While loop runs while a specified condition is true and stops once that condition is no longer true
var ourArray = [];
var i = 0;
while(i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray); // [0,1,2,3,4]

//* 93. Iterate with JavaScript For Loops
// for loop runs for a specific number of times.
// For loops are declared with three optional expressions separated by semicolons:
//! for (a; b; c), where a is the intialization statement, b is the condition statement, and c is the final expression
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i); // [0,1,2,3,4]
}

//* 94. Iterate Odd Numbers With a For Loop
var ourArray = [];
for (var i = 1; i < 10; i += 2) {
    ourArray.push(i);
}

//* 95. Count Backwards With a For Loop
// In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression
var ourArray = [];
for (var i = 10; i > 0; i --) {
    ourArray.push(i);
}

//* 96. Iterate Through an Array with a For Loop
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//* 97. Nesting For Loops
var arr = [
    [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//* 98. Iterate with JavaScript Do...While Loops
// It is called a do...while loop because it will first do one pass of the code inside the loop no matter what,
// and then continue to run the loop while the specified condition evaluates to true
const ourArray = [];
let i = 0;
do {
    ourArray.push(i);
    i++;
} while (i < 5);

//* 99. Replace Loops using Recursion
//Recursion is the concept that a function can be expressed in terms of itself. 
//example: multiply the first n elements of an array to create the product of those elements
//for loop approach 
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
}
//recursive approach
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    }
    else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}
// In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. 
// That function call is evaluated in the same way, calling multiply again until n <= 0
//! Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), 
//! otherwise they can never finish executing.

//* 100. Profile Lookup
// The function lookUpProfile should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for(let i=0; i<contacts.length; i++){
        if(contacts[i]["firstName"] === name){
            if(contacts[i].hasOwnProperty(prop)){
                return (contacts[i][prop]);
            }
            else{ return "No such property"; }
        }
    }
    return "No such contact";
}
lookUpProfile("Akira", "likes");