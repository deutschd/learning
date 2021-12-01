for (var i = 0; i < 10; i++) {
  console.log(i);
}

var name = "Zoe";
var age = 5;
age = age+1;
console.log(age)
/**/
console.log("The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.")

var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}
// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

var a = 10;
var b = 20;
if (a>b) // The outcome of a>b will be a boolean
    console.log("Variable `a` has higher value"); // if a>b is true
else 
    console.log("Variable `b` has higher value"); // if a>b is false

var a = 10;
var b = 10;

if (a>b)
console.log("a higher")
else
console.log("b higher")
console.log(Number("Hello"))

var firstName = "Shakhzod";
var interest = "duckbills";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

var price = 15.00;//
var money = 20.00;//
if (money >= price) {
    console.log("buy the hammer");
} else {
    console.log("don't buy the hammer");
}

var weather = "sunny";
if (weather === "snow")
    {console.log("Bring a coat.");
}
else if (weather === "rain")
    {console.log("Bring a rain jacket.");
}
else
    {console.log("Wear what you have on.");
}

var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

var number = 21;

// Note that a strict equality operator === checks the equality of operands without type conversion.
if (0 === number % 2) {
    console.log("even");
} else {
    console.log("odd");
}

var room = "dining room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
var suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/
var weapon = "";  // Initial value

// A boolean variable `solved` will tell us the status of mystery
// true --> solved and false --> unsolved
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'ballroom') {
    weapon = 'poison';
    // Mr. Kalehoff was present in the ballroom at the time of the murder
    if(suspect==="Mr. Kalehoff") 
        solved = true;
}

else if (room === 'gallery') {
    weapon = 'trophy';
    // Ms. Van Cleve was present in the gallery at the time of the murder
    if(suspect==="Ms. Van Cleve") 
        solved = true;
}
else if (room === 'billiards room') {
    weapon = 'pool stick';
    // Mrs. Sparr was present in the billiards room at the time of the murder
    if(suspect==="Mrs. Sparr") 
        solved = true;
} 
else if (room === 'dining room') {
    weapon = 'knife';
    // Mr. Parkes was present in the dining room at the time of the murder
    if(suspect==="Mr. Parkes") 
        solved = true;
}   

if (solved) {
    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}

var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}

var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log ("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
}


var shirtWidth = 21;
var shirtLength = 29;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

var eatsPlants = false;
var eatsAnimals = true;
var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category)


var education = 'no high school diploma';
var salary = 0;
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
}


console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");

var x = 1;
while (x <= 5) {
    console.log(x + " mississippi");
    x = x + 1;
}

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 3; // how to get to the next item
}

for (var i = 0; i < 6; i = i + 1){
    console.log("Printing out i = " + i);
}

for (var x = 0; x < 5; x = x + 1) {
    for (var y = 0; y < 3; y = y + 1) {
      console.log(x + "," + y);
    }
  }

  let solution = 1; //factorial finder

  for (let i = 1; i <= 12; i++) {
    solution *= i;
  }
  
  console.log(solution);

for (var x = 0; x < 25; x = x + 1) {
    for (var y = 0; y < 99; y = y + 1) {
      console.log(x + "-" + y);
    }
  }