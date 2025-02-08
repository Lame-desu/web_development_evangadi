// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.
// Hint: Use the "textContent" property to select the content

var question1 = document.querySelector("#sample1");
console.log(question1);
console.log(question1.textContent);

// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)
console.log(document.getElementById("techCompanies"));

// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// display it on your console.
console.log(document.querySelector("#techCompanies"));

// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total.
console.log(document.querySelectorAll("#techCompanies li").length);

// 2.4 Select all elements with a class name of "red" and display them on the console.
// Use both "querySelectorAll" and "getElementByClass"
console.log(document.querySelectorAll(".red"));
console.log(document.getElementsByClassName("red"));

// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console
// 2.6 Give the newly created element a class of "blue" using JavaScript
// 2.7 Append the newly created element next to the the "Sony" li element
var newEl = document.createElement("li");
newEl.className = "blue facebook";
newEl.textContent = "FaceBook";
document.querySelector("#techCompanies").append(newEl);
console.log(document.querySelector(".facebook"));

// 2.8 How many of the tech companies are labeled blue? Find the result using
// JavaScript and display the result inside the "blueCompanies" div.
var lengthOfBlue = document.querySelectorAll("#techCompanies .blue").length;
console.log(lengthOfBlue);
// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on.
document.querySelector("#yesBackground").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#99ecff";
});

document.querySelector("#noBackground").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "";
});

// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form

var inputs = document.querySelectorAll(".form-values input");

document.querySelector("#submitButton").addEventListener("click", addNumbers);

function addNumbers(event) {
  event.preventDefault();
  var val1 = inputs[0].value;
  var val2 = inputs[1].value;

  if (isNaN(val1) || isNaN(val2)) {
    document.querySelector("#sum").textContent =
      "Please enter numberical values only";
    return;
  } else {
    var result = Number(val1) + Number(val2);
    console.log(result);
    document.querySelector("#sum").textContent = result;
  }
}
