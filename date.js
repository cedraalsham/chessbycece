window.onload = function () {

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow < 12) {
    greeting = "Good morning !";
  } else if (hourNow > 18) {
    greeting = "Good evening !";
  } else {
    greeting = "Hello !";
  }

  document.getElementById("headerText").innerHTML = greeting;

};