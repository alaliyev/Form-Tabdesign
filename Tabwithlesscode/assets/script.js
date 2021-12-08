var buttons = document.querySelectorAll("button");

var tabcontent = document.querySelectorAll(".tabcontent");

var previous;

var previousbtn;

buttons.forEach((btn) => {
  btn.onclick = function () {
    var dataId = btn.getAttribute("data-id");
    var city = document.getElementById(dataId);
    btn.style.backgroundColor = "turquoise";
    if (previous) {
      previous.classList.add("d-none");
    }
    if (previousbtn) {
      previousbtn.style.backgroundColor = "white";
    }
    city.classList.remove("d-none");
    previous = city;
    previousbtn = btn;
  };
});
