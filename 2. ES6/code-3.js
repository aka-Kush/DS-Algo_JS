//* 18. Use class Syntax to Define a Constructor Function
// ES6 provides a new syntax to create objects, using the class keyword
// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation
// of an object - oriented paradigm
// In ES5, we usually define a constructor function and use the new keyword to instantiate an object
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// The class syntax simply replaces the constructor function creation
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');
// It should be noted that the class keyword declares a new function, to which a constructor is added. 
// This constructor is invoked when new is called to create a new object

//* 19. Use getters and setters to Control Access to an Object
// Getter functions are meant to simply return (get) the value of an object's private variable to the
// user without the user directly accessing the private variable
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer); // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer); // newAuthor
// Getters and setters are important because they hide internal implementation details
//! Note: It is convention to precede the name of a private variable with an underscore (_)

// Example:
class Thermostat{
    constructor(fahrenheit ){
        this._fahrenheit = fahrenheit; 
    }
    get temperature(){
        return 5/9 * (this._fahrenheit - 32);
    }
    set temperature(celsius){
        this._fahrenheit = celsius * 9.0 / 5 + 32;
        return this._fahrenheit;
    }
}
const thermo = new Thermostat(76); // setting temp in fahrenheit
console.log(thermo.temperature); // 24.444 (76 fahrenheit convertted to celsius)
thermo.temperature = 26; // setting temp in celsius
console.log(thermo.temperature); // 26 (returning temp in celsius)

//* 20. Create a Module Script
// In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files
// This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them
// In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module
<html>
    <body>
        <script type="module" src="index.js"></script>
    </body>
</html>

//* 21. Use export to Share a Code Block
// Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
// One of them is stored in a variable, add, that takes in two numbers and returns their sum.You want to use this
// function in several different JavaScript files.In order to share it with these other files, you first need to export it
export const add = (x, y) => {
    return x + y;
}
// The above is a common way to export a single function, but you can achieve the same thing like this
const add = (x, y) => {
    return x + y;
}
export { add }; // you can also export multiple variable/functions : export { add, subtract };
// When you export a variable or function, you can import it in another file and use it without having to rewrite the code

//* 22. Reuse JavaScript Code Using import
// import allows you to choose which parts of a file or module to load
import { add } from './math_functions.js'; // from previous example ; you can also import multiple items : import { add, subtract } from './math_functions.js'
// Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest.
// The./ tells the import to look for the math_functions.js file in the same folder as the current file.
// The relative file path(./) and file extension (.js) are required when using import in this way

//* 23. Use * to Import Everything from a File
// Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax
import * as myMathModule from "./math_functions.js";
// The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything.
// The object will contain all of the exports from math_functions.js in it
//  Here's how you can use the add and subtract functions that were imported : 
myMathModule.add(2,3);
myMathModule.subtract(5,3);