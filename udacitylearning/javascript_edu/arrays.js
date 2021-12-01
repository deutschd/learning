var arraysInArrays = [
    [1, 2, 3], 
    ["Julia", "James"], 
    [true, false, true, false]
  ];
arraysInArrays[2] = [true, true, true, true]
console.log(arraysInArrays[2])
console.log(arraysInArrays);

var udaciFamily = ["Julia", "James", "Shakhzod"]; 

for (var index = 0; index<udaciFamily.length; index++){
    console.log(udaciFamily[index]);
}

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

// Array Properties and Methods
console.log(crew.length) // show the length of Array
crew.push("James") // add to the end
console.log(crew)
crew.pop() // pops the last element in the Array
console.log(crew)
console.log(crew.pop()) // also .pop() shows the last element
crew.splice(1, 2, "Kiara", "Ostin");
console.log(crew)

// Array Loops
for (var i = 0; i < crew.length; i++) {
    crew[i] += " hero";
    crew[i] = crew[i].toUpperCase();
}
console.log(crew)
//forEach loop
var donuts = ["jelly donut", "chocolate donut", "glazed donut"]

donuts.forEach(function(donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
});

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

//Map
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(improvedDonuts)

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var newBills = bills.map(function(bill) {
    bill = bill + bill*0.15;
    return bill;
});
console.log(newBills)

//Arrays in Array
var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];

  for (var row = 0; row < donutBox.length; row++) {
    // here, donutBox[row].length refers to the length of the donut array currently being looped over
    for (var column = 0; column < donutBox[row].length; column++) {
      console.log(donutBox[row][column]);
    }
  }



var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var i=0; i<numbers.length; i++){
    // Let j represents the length of a sub-array 
    for(var j=0; j<numbers[i].length; j++){
        if(numbers[i][j]%2===0)
            numbers[i][j]="even";
        else
            numbers[i][j]="odd";
    }
}
console.log(numbers);
