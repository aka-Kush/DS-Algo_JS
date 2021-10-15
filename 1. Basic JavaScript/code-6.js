//* 79. Build JavaScript Objects
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties
var cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};
var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};
//! if your object has any non-string properties, JavaScript will automatically typecast them as strings

//* 80. Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array
var myObj = {
    prop1: "val1",
    prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

//* 81. Accessing Object Properties with Bracket Notation
// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation
var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise
//! Note that property names with spaces in them must be in quotes (single or double)

//* 82. Accessing Object Properties with Variables
// Another use of bracket notation on objects is to access a property which is stored as the value of a variable
var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // Doberman

// Another way you can use this concept is when the property's name is collected dynamically during the program execution
var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]); // John

//* 83. Updating Object Properties
// After you've created a JavaScript object, you can update its properties at any time using either dot or bracket notation
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.name = "Happy Camper"; // Dot Notation
ourDog["name"] = "Happy Camper"; // Bracket Notation

//* 84. Add New Properties to a JavaScript Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-wow";

//* 85. Delete Properties from a JavaScript Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
delete ourDog.bark;

//* 86. Using Objects for Lookups
var alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    24:"C",
    25:"B",
    26:"A"
};
alpha[2]; // Y
alpha[24]; // C

var value = 2;
alpha[value]; // Y

//* 87. Testing Objects for Properties
// We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name
// .hasOwnProperty() returns true or false if the property is found or not
var myObj = {
    top: "hat",
    bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false

//* 88. Manipulating Complex Objects
// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. 
// They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
var ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [ 
            "CD", 
            "Cassette", 
            "LP"
        ],
    "gold": true
    }
];

//* 89. Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": { 
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2; //secrets
ourStorage.desk.drawer; // stapler

//* 90. Accessing Nested Arrays
var ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];
ourPets[0].names[1]; // Fluffy
ourPets[1].names[0]; // Spot

//* 91. Record Collection
// You are given an object literal representing a part of your musical album collection. 
// Each album has a unique id number as its key and several other properties.Not all albums have complete information.

// You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id,
// a prop(like artist or tracks), and a value.Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire record collection object.
//! If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//! If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//! If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//! If value is an empty string, delete the given prop property from the album.
// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== "") 
        {records[id][prop] = value;}
    else if(prop === 'tracks' && records[id].hasOwnProperty("tracks") === false) 
        {records[id][prop] = [value];}
    else if(prop === 'tracks' && value !== "")
        {records[id][prop].push(value);}
    else if(value === "")
        {delete records[id][prop];}
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');