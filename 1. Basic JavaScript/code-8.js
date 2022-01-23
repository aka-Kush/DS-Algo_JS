//* 101. Generate Random Fractions with JavaScript
// JavaScript has a Math.random() function that generates a random decimal number between 0(inclusive)
// and 1(exclusive). Thus Math.random() can return a 0 but never return a 1
function randomFraction() {
    return Math.random();
}

//* 102. Generate Random Whole Numbers with JavaScript
// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 10.
// Use another function, Math.floor() to round the number down to its nearest whole number.
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

//* 103. Generate Random Whole Numbers within a Range
// To do this, we'll define a minimum number min and a maximum number max
function randomRange(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

//* 104. Use the parseInt Function
// The parseInt() function parses a string and returns an integer
const a = parseInt("007");
// The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number,
// then it returns NaN

//* 105. Use the parseInt Function with a Radix
// parseInt() function takes a second argument for the radix, which specifies the base of the number in the string.
// The radix can be an integer between 2 and 36
const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2

//* 106. Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and
// c is the code to run when the condition returns false
// if-else example
function findGreater(a, b) {
    if(a > b) {
        return "a is greater";
    }
    else {
        return "b is greater or equal";
    }
}
// conditional operator
function findGreater(a, b) { return a > b ? "a is greater" : "b is greater or equal"; }

//* 107. Use Multiple Conditional (Ternary) Operators
// if-else approach
function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}
// conditional operators approach
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
        : (a > b) ? "a is greater"
            : "b is greater";
}

//* 108. Use Recursion to Create a Countdown
// a recursive function that returns an array containing the numbers 1 through n.This function will need to accept an argument,
// n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));

//* 109. Use Recursion to Create a Range of Numbers
// The function should return an array of integers which begins with a number represented by the startNum parameter and 
// ends with a number represented by the endNum parameter
function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return [];
    }
    else {
        const array = rangeOfNumbers(startNum, endNum -1);
        array.push(endNum);
        return array;
    }
};
console.log(rangeOfNumbers(1,5));