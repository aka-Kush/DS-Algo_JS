//* 10. Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// Also, it is possible to combine a range of letters and numbers in a single character set.
let johnStr = "john8642smith";
let myRegex = /[0-9a-z]/ig;
johnStr.match(myRegex); // ['j', 'o', 'h', 'n', '8', '6', '4', '2', 's', 'm', 'i', 't', 'h']

//* 11. Match Single Characters Not Specified
// Negated character is a set of characters that you do not want to match.
// To create a negated character set, you place a caret character (^) after the opening bracket and
// before the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel.
// Note that characters like., !, [, @, / and white space are matched.
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/ig; // exclude all the numbers and vowels  
let result = quoteSample.match(myRegex); 

//* 12. Match Characters that Occur One or More Times
let sampleStr = "Mississippi";
let sampleRegex = /s/g;
sampleStr.match(sampleRegex); // ['s', 's', 's', 's']

// You can use the + character to check if a character (or group of characters) appears one or more times in a row
// Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other
let sampleRegex2 = /s+/g;
sampleStr.match(sampleRegex2); // ['ss', 'ss']

//* 13. Match Characters that Occur Zero or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooo"]
gPhrase.match(goRegex); // null
oPhrase.match(goRegex); // null

// + sign is to look for characters that occur one or more times.
// The character asterisk or star: * is an option that matches characters that occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooo"]
gPhrase.match(goRegex); // ["g"]
oPhrase.match(goRegex); // null

//* 14. Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and  returns it as a match.
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// Regular expressions are by default greedy, so the match would return ["titani"].
// It finds the largest sub - string possible to fit the pattern.
// However, you can use the ? character to change it to lazy matching.
// "titanic" matched against the adjusted regex of / t[a - z] *? i / returns["ti"]
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // <h1>
let result = text.match(myRegex);
//! Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine

//* 15. Find One or More Criminals in a Hunt
// A group of criminals escaped from jail and ran away, but you don't know how many. 
// However, you do know that they stay close together when they are around other people.
// You are responsible for finding all of the criminals at once
// Write a greedy regex that finds one or more criminals within a group of other people. 
// A criminal is represented by the capital letter C
let criminalRegex = /C+/g;
let sampleStr1 = "CC";
let sampleStr2 = "P1P5P4CCCcP2P6P3";
let sampleStr3 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";
console.log(sampleStr1.match(criminalRegex)); // CC
console.log(sampleStr2.match(criminalRegex)); // CCC
console.log(sampleStr3.match(criminalRegex)); // CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

//* 16. Match Beginning String Patterns
// Inside a character set, caret character (^) creates a negated character set
// Outside of a character set, the caret is used to search for patterns at the beginning of strings
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // false

//* 17. Match Ending String Patterns
// You can search the end of strings using the dollar sign character $ at the end of the regex
let theEnding = "This is a never ending story";
let storyRegex = /story$/; 
storyRegex.test(theEnding); // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // false

//* 18. Match All Letters and Numbers
// The closest character class in JavaScript to match the alphabet is \w. 
// This shortcut is equal to[A - Za - z0 -9_].This character class matches upper and lowercase letters plus numbers.
//! Note, this character class also includes the underscore character(_)
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true
// These shortcut character classes are also known as shorthand character classes

//* 19. Match Everything But Letters and Numbers
// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!"; 
numbers.match(shortHand); // [%]
sentence.match(shortHand); // [!]