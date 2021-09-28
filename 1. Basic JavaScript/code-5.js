//* 67. Introducing Else Statements
// When a condition for an if statement is false, with the help of an else statement, an alternate block of code can be executed
function test(num) {
    if (num >= 10) {
        console.log(`${num} is greater than or equal to 10.`);
    }
    else {
        console.log(`${num} is less than 10.`);
    }
}
test(5); // 5 is less than 10.
test(11); // 11 is greater than or equal to 10.

//* 68. Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements
if (num > 15) {
    return "Greater than 15";
} else if (num < 15) {
    return "Smaller than 15";
} else {
    return "Equal to 15";
}

//* 69. Logical Order in If Else Statements
// The function is executed from top to bottom so you will want to be careful of what statement comes first
// First Case
function foo(x) {
    if (x < 1) {
        return "Less than one";
    } else if (x < 2) {
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}
// Second Case
function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}
foo(0); // less than one
bar(0); // less than two

//* 70. Chaining If Else Statements
// if/else statements can be chained together for complex logic
if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3
} else {
    statement4
}

//* 71. Golf Code
/*In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in
the hole to complete the play.Depending on how far above or below par your strokes are, there is a different nickname.
Your function will be passed par and strokes arguments.Return the correct string according to this table which lists the strokes in order of priority;
top(highest) to bottom(lowest):
Strokes	          Return
1	            "Hole-in-one!"
<= par - 2	       "Eagle"
par - 1	           "Birdie"
par	                "Par"
par + 1	           "Bogey"
par + 2	        "Double Bogey"
>= par + 3     	  "Go Home!"
*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if(strokes == 1){return names[0];}
    else if(strokes <= par - 2){return names[1];}
    else if(strokes == par - 1){return names[2];}
    else if(strokes == par)    {return names[3];}
    else if(strokes == par + 1){return names[4];}
    else if(strokes == par + 2){return names[5];}
    else if(strokes >= par + 3){return names[6];}
}
golfScore(5, 4); // Birdie

//* 72. Selecting from Many Options with Switch Statements
// A switch statement tests a value and can have many case statements which define various possible values.
// Statements are executed from the first matched case value until a break is encountered
//! case values are tested with strict equality (===). 
//! The break tells JavaScript to stop executing statements.If the break is omitted, the next statement will be executed
function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
caseInSwitch(1); // alpha
caseInSwitch(2); // beta
caseInSwitch(3); // gamma
caseInSwitch(4); // delta

//* 73. Adding a Default Option in Switch Statements
// default statement will be executed if no matching case statements are found
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
switchOfStuff(1); // stuff

//* 74. Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered
var result = "";
switch(val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
}

//* 75. Replacing If Else Chains with Switch
// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements
// if else 
if (val === 1) {
    answer = "a";
} else if (val === 2) {
    answer = "b";
} else {
    answer = "c";
}
// switch
switch(val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
}

//* 76. Returning Boolean Values from Functions
function isEqual(a,b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
// alternative : Since === returns true or false, we can return the result of the comparison
function isEqual(a,b) {
    return a === b;
}

//* 77. Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location
function myFun() {
    console.log("Hello");
    return "World";  
    console.log("byebye"); // this will never be printed to the console
}
myFun();

//* 78. Counting Cards
/* 
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, 
the player should bet high. When the count is zero or negative, the player should bet low.
Count Change	      Cards
+1 	                2, 3, 4, 5, 6
0	                   7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count 
variable according to the card's value (see table). The function will then return a string with the current count and the string Bet 
if the count is positive, or Hold if the count is zero or negative. 
The current count and the player's decision (Bet or Hold) should be separated by a single space.
*/
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 4:
        case 5:
        case 6:
            count = 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if (count > 0) {
        return (`${count} Bet`)
    }
    else {
        return (`${count} Hold`)
    }
}
cc(2);
cc('K');
