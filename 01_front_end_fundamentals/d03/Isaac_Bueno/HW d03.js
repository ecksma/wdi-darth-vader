After Hours

Loop Reps!

In your own words, create a new file and define to you What is the purpose of a loop?
Create three arrays: an array of Strings, an array of Numbers, and a mixed array (one that contains both).
Create a for and for-in loop for each of the three arrays inside of a new file called loop_ah.js.
Basic DOM Styling

Create a new html file called loops-ah.html.
Inside of this file, create a set of unordered lists (<ul>).
Inside of each <ul>, add a list item (<li>) for each item the in arrays you created above.
Use an inline-stylesheet to style strings as bold and orange colour text for each String
Use an inline-stylesheet to style strings as italic and purple colour text for each String
Save the file for us to review!
Read Eloquent Javascript

Complete reading Eloquent Javascript Chapter 2 before Thursday.

//the purpose of a loop as of right now is limited. I know that the purpose of the loop is vast but because I do not practically know how I would use this within building a Webpage/site I know that I can use it for exercises like d02 after hours, where we create a story. What I currently know/ understnd now is that a "for loop" can be used in pushing things to a webpage in a specified or non speicified order.

//array #1
var arrayOfStrings = ["this","shit","is","boss", "man"];
for (i=0; i<arrayOfStrings.length; i++) {
  console.log(arrayOfStrings[i]);
}

for (i in arrayOfStrings) {
  console.log(arrayOfStrings[i]);
}

//array #2
var arrayOfNumbers = [1,2,3,4,5,6];
for (var i=arrayOfNumbers.length-1; i >=0; i--) {
console.log(arrayOfNumbers[i]);
}


for (i in arrayOfStrings) {
  console.log(arrayOfStrings[i]);
}

//array #3
var aMixedArrayOfBothStringsAndNumbers = ['this', 123123123, 'shit', 098098, 'is', 765765, 'boss', 7651234876124, 'man'];
for(i=0; i < aMixedArrayOfBothStringsAndNumbers.length; i++) {
  console.log(aMixedArrayOfBothStringsAndNumbers)
}


for (i in aMixedArrayOfBothStringsAndNumbers) {
  console.log(aMixedArrayOfBothStringsAndNumbers[i]);
}
