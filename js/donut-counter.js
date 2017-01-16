//JS Donut Counter Lab

var guests = parseInt(prompt('How many guests are at your party?'));

var donuts = parseInt(prompt('How many donuts do you have?'));
//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts
var donutguest = guests - donuts

if (guests > donuts) {
  alert("There are " + donutguest + " more guests than donuts! You need more donuts!")
} else {
  alert("You have enough donuts.")
}
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
