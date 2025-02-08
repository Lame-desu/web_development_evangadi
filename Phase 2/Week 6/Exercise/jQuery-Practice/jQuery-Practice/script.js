// Question 1
let sample1 = $("#sample1");
console.log(sample1);
console.log(sample1.text());

// Question 2
let techCompanies = $("#techCompanies");
console.log(techCompanies);
let numOfTechCompanies = $("#techCompanies li");
console.log(numOfTechCompanies.length);
let redClass = $(".red");
console.log(redClass);
var newElement = $("<li>Facebook</li>");
console.log(newElement);
newElement.addClass("blue");
$("#techCompanies").append(newElement);
let blueCompanies = $("#techCompanies .blue").length;
$("#blueCompanies").append("<p>" + blueCompanies + "</p>");

// Question 3

$("#submitButton").click((event) => {
  event.preventDefault();
  let input1 = $("#first_value").val();
  let input2 = $("#second_value").val();
  input1 = Number(input1);
  input2 = Number(input2);
  let textValue = $("#sum");
  if (isNaN(input1) || isNaN(input2)) {
    textValue.text("Please enter numerical values only");
  } else {
    let sum = input1 + input2;
    let average = (input1 + input2) / 2;
    textValue.text("Sum:" + sum + "\nAverage:" + average);
    console.log("Sum:" + sum + "\n" + "Average:" + average);
  }
});

//Question 4
$("#submitBtn").click((event) => {
  event.preventDefault();
  let input1 = $("#first_name").val();
  let input2 = $("#last_name").val();
  let input3 = $("#email").val();

  if (input1 == "" || input2 == "" || input3 == "") {
    $("#error_message").text("All fields are required");
    $("#error_message").addClass("error_color");
  } else {
    $("#form_container").css("display", "none");
    $("#error_message").append(
      "First Name: " +
        input1 +
        "</br>" +
        "Last Name: " +
        input2 +
        "</br>" +
        "Email: " +
        input3
    );
  }
});
