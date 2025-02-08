var elements = document.querySelectorAll(".container input");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", changeColor);
}

function changeColor() {
  var text = this.id;
  switch (text) {
    case "blue":
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      break;
    case "green":
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      break;
    case "purple":
      document.body.style.backgroundColor = "purple";
      document.body.style.color = "white";
      break;
    case "sunny":
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
      break;
    case "dark":
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      break;
    case "white":
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      break;
  }
}

document.querySelector("#plus").addEventListener("click", increaseFun);
document.querySelector("#minus").addEventListener("click", decreaseFun);

function increaseFun() {
  var previousResult = Number(document.querySelector("#result").textContent);
  if (previousResult < 20) {
    document.querySelector("#result").textContent = previousResult + 1;
  } else {
    console.log("reached maximum value");
  }
}

function decreaseFun() {
  var previousResult = Number(document.querySelector("#result").textContent);
  if (previousResult > 0) {
    document.querySelector("#result").textContent = previousResult - 1;
  } else {
    console.log("reached minimum value");
  }
}

document.querySelector("#submit").addEventListener("click", validateInput);

function validateInput(event) {
  event.preventDefault();
  var value1 = document.querySelector("#user_name").value;
  var value2 = document.querySelector("#password").value;

  if (value1 == "") {
    document.querySelector("#user_name").classList.add("pinkBackground");
  }
  if (value2 == "") {
    document.querySelector("#password").classList.add("pinkBackground");
  }
  if (value1 != "" && value2 != "") {
    document.querySelector(".form").classList.add("invisible");
    document.querySelector("#submitted").textContent =
      "submitted... Thank You!!!";
  }
}
