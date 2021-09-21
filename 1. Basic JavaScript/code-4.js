//* 51. Return a Value from a Function with Return
// You can use a return statement to send a value back out of a function
function plusThree(num) {
    return num + 3;
}
var answer = console.log(plusThree(5));

//* 52. Understanding Undefined Value returned from a Function
// In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined
var sum = 0;
function addSum(num) {
    sum = sum + num; // The function will change the global sum variable
} // returned value of the function is undefined
addSum(3);

//* 53. Assignment with a Returned Value
// we can take the return value of a function and assign it to a variable
function sum(n1, n2) {
    return n1 + n2;
}
outSum = sum(5, 2);

//* 54. Stand in Line
//  queue is an abstract Data Structure where items are kept in order. 
// New items can be added at the back of the queue and old items are taken off from the front of the queue.
const myArr = [1,2,3,4,5];
function nextInLine(arr, num) {
    arr.push(num); // push num to end of array
    return arr.shift(); // remove first element of array
}
console.log(nextInLine(myArr, 6)); // 1
console.log(myArr); // [2,3,4,5,6]

//* 55. Understanding Boolean Values
// Booleans are another data type which may only be one of two values: true or false
function isTrue() {
    return true;
}
function isFalse() {
    return false;
}

//* 56. Use Conditional Logic with If Statements
// If statements are used to make decisions in code
// When the condition evaluates to true, the program executes otherwise not
function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}
test(true);
test(false);

//* 57. Comparison with the Equality Operator
// All of these operators return a boolean true or false value
// The equality operator (==) compares two values and returns true if they're equivalent or false if they are not
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}
equalityTest(10); // Equal
equalityTest(2); // Not Equal
// In order for JavaScript to compare two different data types (for example, numbers and strings), 
// it must convert one type to another.This is known as Type Coercion.
//! 1   ==  1         => true
//! 1   ==  2         => false
//! 1   == '1'        => true
//! "3" ==  3         => true

//* 57. Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==)
// the strict equality operator does not perform a type conversion
// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
//! 3 ===  3         => true
//! 3 === '3'        => false

//* 58. Practice comparing different values
//! Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
// typeof 3; typeof '3';
//! Note:
// '=' assignment operator : assigns RHS value to LHS 
// '==' Equality Operator : checks if LHS = RHS ; does Type Coercion if needed
// '===' Strict Equality Operator : checks if LHS = RHS and if there data type is same as well ; doesn't do Type Coercion 

//* 59. Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. 
// It means not equal and returns false where equality would return true and vice versa.
// Like the equality operator, the inequality operator will convert data types of values while comparing
//! 1 !=  2           => true
//! 1 != "1"          => false
//! 1 != '1'          => false
//! 1 != true         => false
//! 0 != false        => false

//* 60. Comparison with the Strict Inequality Operator
// The strict inequality operator(!==) is the logical opposite of the strict equality operator. 
// It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.
// The strict inequality operator will not convert data types.
//! 3 !==  3           => false
//! 3 !== '3'          => true
//! 4 !==  3           => true

//* 61. Comparison with the Greater Than Operator
// The greater than operator(>) compares the values of two numbers. 
// If the number to the left is greater than the number to the right, it returns true.Otherwise, it returns false.
// the greater than operator will convert data types of values while comparing
//! 5   >  3           => true
//! 7   > '3'          => true
//! 2   >  3           => false
//! '1' >  9           => false

//* 62. Comparison with the Greater Than Or Equal To Operator
// The greater than or equal to operator(>=) compares the values of two numbers. 
// If the number to the left is greater than or equal to the number to the right, it returns true.Otherwise, it returns false
// the greater than or equal to operator will convert data types while comparing
//! 6   >=  6           => true
//! 7   >= '3'          => true
//! 2   >=  3           => false
//! '7' >=  9           => false

//* 63. Comparison with the Less Than Operator
// The less than operator (<) compares the values of two numbers.
// If the number to the left is less than the number to the right, it returns true.Otherwise, it returns false.
// the less than operator converts data types while comparing
//! 2 < 5           => true
//! '3' < 7         => true
//! 5   < 5         => false
//! 3   < 2         => false
//! '8' < 4         => false

//* 64. Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator(<=) compares the values of two numbers.
// If the number to the left is less than or equal to the number to the right, it returns true.If the number on the left is greater than the number on the right, it returns false.
// the less than or equal to operator converts data types
//! 4   <= 5           => true
//! '7' <= 7           => true
//! 5   <= 5           => true
//! 3   <= 2           => false
//! '8' <= 4           => false

//* 65. Comparisons with the Logical And Operator
// The logical and operator (&&) returns true if and only if the operands to the left and right of it are true
if (num > 5 && num < 10) { // return Yes if num is greater than 5 and less than 10
    return "Yes";
}
return "No";

//* 66. Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";