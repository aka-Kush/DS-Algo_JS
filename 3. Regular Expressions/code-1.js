//* 1. Using the Test Method
// Regular expressions are used in programming languages to match parts of strings.
// You create patterns to help you do that matching
// If you want to find the word the in the string The dog chased the cat, you could use
// the following regular expression: /the/. 
//! Notice that quote marks are not required within the regular expression
// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
// The.test() method takes the regex, applies it to a string, and returns true or false if your pattern finds something or not
let testStr = "kanYEwest";
let regexStr = /YE/;
console.log(regexStr.test(testStr)); // true

//* 2. Match Literal Strings
// In the last challenge, you searched for the word YE using the regular expression /YE/.
// That regex searched for a literal match of the string YE
// Any other forms of YE will not match. For example, the regex /YE/ will not match ye or Ye
// let testStr = "kanYEwest";
let regexStr2 = /ye/;
console.log(regexStr2.test(testStr)); // false

//* 3. Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern coding in another string.
// This is powerful to search single strings, but it's limited to only one pattern. 
// You can search for multiple patterns using the alternation or OR operator: |
// This operator matches patterns either before or after it. 
// For example, if you wanted to match the strings yes or no or maybe, the regex you want is /yes|no|maybe/
let petString = "James has a pet cat.";
let petRegex = / dog|cat|bird|fish /; 
let result = petRegex.test(petString);

//* 4. Ignore Case While Matching
// You can match both cases using what is called a flag. There are other flags but here you'll focus
// on the flag that ignores case - the i flag.You can use it by appending it to the regex.
// An example of using this flag is /ignorecase/i
let testStr = "kanYEwest";
let regexStr3 = /ye/i;
console.log(regexStr3.test(testStr)); // true

//* 4. Extract Matches
// You can also extract the actual matches you found with the .match() method.
// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses
let ourStr = "Regular Expressions";
let ourRegex = /expression/i;
ourStr.match(ourRegex); // ['Expression']
// or
"Random Variable".match(/Var/); // ['Var']

//* 5. Find More Than the First Match
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex); // ["Repeat"]

// To search or extract a pattern more than once, you can use the g flag
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); // ["Repeat", "Repeat", "Repeat"]
//! Note: You can have multiple flags on your regex like /search/gi

//* 6. Match Anything with Wildcard Period
// Sometimes you won't know the exact characters in your patterns
// The wildcard character . will match any one character. The wildcard is also called dot and period. 
// You can use the wildcard character just like any other character in the regex.
// For example,if you wanted to match hug,huh,hut, and hum, you can use the regex /hu./ to match all four words
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // true
huRegex.test(hugStr); // true

//* 7. Match Single Character with Multiple Possibilities
// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing 
// them inside square([and]) brackets. For example, you want to match bag, big, and bug but not bog. 
// You can create the regex / b[aiu]g / to do this.The[aiu] is the character class that will only 
// match the characters a, i, or u
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // ["big"] 
bagStr.match(bgRegex); // ["bag"]
bugStr.match(bgRegex); // ["bug"]
bogStr.match(bgRegex); // null

//* 8. Match Letters of the Alphabet
// When you need to match a large range of characters, that's a lot of typing
// hyphen character: - is a built-in feature that makes this short and simple as you can define a range of characters to match
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);