//* 26. Concatenating Strings with Plus Operator
var str = "My name is " + "Slim Shady";

//* 27. Concatenating Strings with the Plus Equals Operator
var firstStr = "My name is ";
firstStr += "Slim Shady";

//* 28. Constructing Strings with Variables
var strVar = "Slim";
var str = "Hi my name is " + strVar + " Shady";

//* 28. Appending Variables to Strings
var firstStr = "Slim ";
var secondStr = "Shady";
secondStr += firstStr;

//* 29. Find the Length of a String
// You can find the length of a String value by writing .length after the string variable or string literal
console.log("Joe mama".length);
var nameVar = "Joe mama";
console.log(nameVar.length);

//* 30 . Use Bracket Notation to Find the First Character in a String
// Bracket notation is a way to get a character at a specific index within a string. Most modern programming languages, like JavaScript follow Zero-based indexing.
var firstName = "Joe";
var firstLetter = firstName[0];

//* 31. Understand String Immutability
// In JavaScript, String values are immutable, which means that they cannot be altered once created
var myStr = "Bob";
myStr[0] = "J"; // This won't change myStr to Job
myStr = "Job"; // This will work just fine

//* 32. Use Bracket Notation to Find the Nth Character in a String
var firstName = "Joe";
var secondLetterOfFirstName = firstName[1];

//* 33. Use Bracket Notation to Find the Last Character in a String
var lastName = "Mama";
var lastLetter = lastName[lastName.length - 1];

//* 34. Use Bracket Notation to Find the Nth-to-Last Character in a String
var month = "September";
var thirdToLastLetter = month[month.length - 3];

//* 35. Word Blanks
var myNoun = "dog"; var myAdjective = "big"; var myVerb = "ran"; var myAdverb = "quickly";
var wordBlanks = "A " + myAdjective + " " + myNoun + " was chasing me. So I " + myVerb + " " + myAdverb;