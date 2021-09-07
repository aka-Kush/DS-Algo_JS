//* 1. Comment Your JavaScript Code
// This is an in-line comment.
/* This is a
multi-line comment */

//* 2. Declare JavaScript Variables
var value;

//* 3. Storing Values with the Assignment Operator
value = 7;

//* 4. Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

//* 5. Initializing Variables with the Assignment Operator
var myVar = 9;

//* 6. Understanding Uninitialized Variables
/* When JavaScript variables are declared, they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
If you concatenate a string with an undefined variable, you will get a literal string of undefined */

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//* 7. Understanding Case Sensitivity in Variables
// In JavaScript all variables and function names are case sensitive.
//! myvar != MYVAR

//* 8. Add Two Numbers with JavaScript
myVar = 5 + 10;

//* 9. Subtract One Number from Another with JavaScript
myVar = 10 - 10;

//* 10. Multiply Two Numbers with JavaScript
myVar = 12 * 13;

//* 11. Divide One Number by Another with JavaScript
myVar = 16 / 2;

//* 12. Increment a Number with JavaScript
// i++ or i += 1 is same as i = i + 1
var myVar = 10;
myVar ++;
myVar += 1;
myVar = myVar + 1;

//* 13. Decrement a Number with JavaScript
// i-- or i -= 1 is same as i = i - 1
var myVar = 10;
myVar --;
myVar -= 1;
myVar = myVar - 1;

//* 14. Create Decimal Numbers with JavaScript
// Deciamal values are also referred as floating point values or floats
var myDecimal = 5.7;

//* 15. Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5;

//* 16. Divide One Decimal by Another with JavaScript
var quotient = 4.4 / 2.0;

//* 17. Finding a Remainder in JavaScript
// % gives the remainder of the division of two numbers
var remainder = 5 % 2;

//* 18. Compound Assignment With Augmented Addition
var myVar = 1;
// output in both the cases will be 6
myVar = myVar + 5; // normal
myVar += 5; // Augmented Addition

//* 19. Compound Assignment With Augmented Subtraction
myVar -= 3;

//* 20. Compound Assignment With Augmented Multiplication
myVar *= 6;

//* 21. Compound Assignment With Augmented Division
myVar /= 2;

//* 22. Declare String Variables
var myName = "Joe Mama";

//* 23. Escaping Literal Quotes in Strings
// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote
var sampleStr = "Alan said, \"Joe is learning JavaScript\".";

//* 24. Quoting Strings with Single Quotes
// String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. 
var doubleQuoteStr = "This is a string"; 
var singleQuoteStr = 'This is also a string';
var str = "Using 'single quotes' inside \"double quotes\" string"

//* 25. Escape Sequences in Strings
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";