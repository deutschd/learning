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
