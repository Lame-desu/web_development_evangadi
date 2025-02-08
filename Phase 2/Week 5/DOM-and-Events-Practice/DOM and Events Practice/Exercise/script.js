// document.getElementById("blue").addEventListener("click", blueBackground);

// function blueBackground() {
//   document.body.style.backgroundColor = "blue";
// }

// var elements = document.querySelectorAll("#selector input");
// for (var i = 0; i < elements.length; i++) {
//   elements[i].addEventListener("click", changeBackground);
// }

// function changeBackground(event) {
//   var text = event.target.value;

//   switch (text) {
//     case "blue":
//       document.body.style.backgroundColor = "blue";
//       break;
//     case "green":
//       document.body.style.backgroundColor = "green";
//       break;
//     case "purple":
//       document.body.style.backgroundColor = "purple";
//       break;
//     case "yellow":
//       document.body.style.backgroundColor = "yellow";
//       break;
//     case "black":
//       document.body.style.backgroundColor = "black";
//       break;
//     case "white":
//       document.body.style.backgroundColor = "white";
//       break;
//   }
// }

var elements = document.querySelectorAll("#selector input");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", changeBackground);
}

function changeBackground(event) {
  var text = event.target.textContent; // Get the value of the clicked input

  switch (text) {
    case "blue":
      document.body.style.backgroundColor = "blue";
      break;
    case "green":
      document.body.style.backgroundColor = "green";
      break;
    case "purple":
      document.body.style.backgroundColor = "purple";
      break;
    case "yellow":
      document.body.style.backgroundColor = "yellow";
      break;
    case "black":
      document.body.style.backgroundColor = "black";
      break;
    case "white":
      document.body.style.backgroundColor = "white";
      break;
  }
}
