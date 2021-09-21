//* 36. Store Multiple Values in one Variable using JavaScript Arrays
var sandwich = ["peanut butter", "jelly", 1];

//* 37. Nest one Array within Another Array
var myArray = [["Bulls", 23], ["White Sox", 45]];

//* 38. Access Array Data with Indexes
// Zero-based numbering
var array = [50,60,70];
var data = array[1]; // data has the value 60

//* 39. Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely
var ourArray = [50,40,30];
ourArray[0] = 15; // ourArray now has the value [15, 40, 30]

//* 40. Access Multi-Dimensional Arrays With Indexes
/* One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, 
the first set of brackets refers to the entries in the outer - most(the first level) array, 
and each additional pair of brackets refers to the next level of entries inside. */
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]; // [[10, 11, 12], 13, 14]
arr[3][0]; // [10, 11, 12]
arr[3][0][1]; // 11
//! There shouldn't be any spaces between the array name and the square brackets, 
//! like array [0][0] and even this array [0] [0] is not allowed.
//! Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

//* 41. Manipulate Arrays With push()
// .push() takes one or more parameters and "pushes" them onto the end of the array
var arr1 = [1,2,3];
arr1.push(4); // arr1 now has the value [1, 2, 3, 4] 
var arr2 = ["Stimpson", "J", "cat"]; 
arr2.push(["happy", "joy"]); // arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]

//* 42. Manipulate Arrays With pop()
// .pop() removes the last element from an array and returns that element
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop(); // oneDown has the value 6 and threeArr now has the values [1,4]

//* 43. Manipulate Arrays With shift()
// It works just like .pop(), except it removes the first element instead of the last
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // removedFromOurArray has a value of the string Stimpson, and ourArray would have ["J", ["cat"]]

//* 44. Manipulate Arrays With unshift()
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray would have the value ["J", "cat"]
ourArray.unshift("Happy"); // ourArray would have the value ["Happy", "J", "cat"]

//* 45. Shopping List
var myList = [
    ["oranges", 10], ["apples", 12], ["chocolates", 2], ["rice", 1]
];

//* 46. Write Reusable JavaScript with Functions
// In JavaScript, we can divide up our code into reusable parts called functions
function sayHello() {
    console.log("Hi there!");
}
sayHello(); // calling this function would print 'Hi there!' to the console

//* 47. Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called
// The actual values that are input (or "passed") into a function when it is called are known as arguments
function functionWithArgs(n1, n2) {
    console.log(n1 + n2);
}
functionWithArgs(1, 2);

//* 48. Global Scope and Functions
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. They can be seen everywhere in your JavaScript code
// Variables which are declared without the var keyword are automatically created in the global scope

//* 49. Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters, have local scope. 
// That means they are only visible within that function
function myTest() {
    var loc = "foo";
    console.log(loc);
}
myTest(); // it will print foo to the console
console.log(loc); // it will throw an error, as loc is not defined outside of the function

//* 50. Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name
//! The local variable takes precedence over the global variable
var someVar = "Hat";
function myFun() {
    var someVar = "Head";
    return someVar; // The function myFun will return the string Head because the local version of the variable is present
}