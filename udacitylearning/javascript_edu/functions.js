function reverseString(reverseMe) {
    var reversed = "";
    for (var i = reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log("Hi: " + reverseString("Shakhzod") + "! My name is " + reverseString("Michael"));

function sayHello () {
    var message = "Hello!";
    return message;
}
console.log(sayHello())

function findAverage (x, y) {
    var answer = (x + y) / 2;
    return answer;
}
var avg = findAverage(12, 5);
console.log(avg)
console.log(findAverage(15,5));


function laugh() {
    var sound = "hahahahahahahahahaha!";
    return sound;
}
console.log(laugh());

//Function to return "ha" times
var sound = "";
function laugh(num) {
    for (var x = 0; x < num; x++){
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}
console.log(laugh(9));

//Function to find a Prime numbers
function isPrime(integer) {
    for (var x = 2; x < integer; x++) {
        if (integer % x === 0) {
            console.log(integer + " is divided by " + x);
            return false;
        }
    }
    console.log(integer + " is Prime number");
    return true;
}
isPrime(59)

//Shadowing
var bookTitle = "La Petite Prince";
console.log(bookTitle);
function displayBookEnglish() {
    var bookTitle = "The Little Prince";
    console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle)

sayHi("Julia");

//Hoisting = when something is not on the right place
function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}

//Making pyramid
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(length) {
    var triangle = "";
    var lineNumber = 1;
    for(lineNumber= 1; lineNumber<=length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}
console.log(buildTriangle(5));

// Function expression
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
console.log(catSays(2))

// Named function expressions
var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  };
  
  // Function declaration that has two parameters: a function for displaying
  // a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

movies(favoriteMovie, "Finding Nemo");

var laugh = function myFunc (num) {
    var laughing = "";
    for (var i = 0; i<=num; i++){
        laughing = laughing + "ha";
    }
    return laughing;
}/* finish the function expression */
console.log(laugh(10));


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + laugh(2));
}
emotions("happy", function(times) {
    var haTimes= "";
    while (times > 0) {
        haTimes +="ha";
        times --;
    }
    haTimes= haTimes +"!";
    return haTimes;
});