var numvar = 10;
var boolvar = true;
var stringvar = "I am a string";

var firstName = "Regine";
var lastName = "Naas";
var myName = (firstName + " " + lastName);
console.log(myName)

console.log(typeof "frog");
var typeOfFrog = typeof "frog";
console.log("The type of frog is " + typeOfFrog);

var orderHasShipped = true;
if (orderHasShipped === true)
console.log("The order is shipped.");
else console.log("The order did not ship.")

for (var counter = 0; counter < 14; counter++) {
    if (counter < 7) { continue; }
console.log (counter); }