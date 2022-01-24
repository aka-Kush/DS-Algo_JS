//! This file includes some missed exercises

//* Explore Differences Between the var and let Keywords
// With the var keyword you can easily overwrite variable declarations
var camper = "James";
var camper = "David";
console.log(camper); // David
// This is a problem as you might accidentally overwrite a variable that you did not intend to
// A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword
// If you replace var with let in the code above, it results in an error
let camper = "James";
let camper = "David";
// Identifier 'camper' has already been declared

//* Declare a Read-Only Variable with the const Keyword
// The keyword let is not the only new way to declare variables
// const has all the awesome features that let has, with the added bonus that variables declared using
// const are read-only. They are a constant value and cannot be reassigned
const FAV_PET = "Cats";
FAV_PET = "Dogs";
// The console will display an error due to reassigning the value of FAV_PET
