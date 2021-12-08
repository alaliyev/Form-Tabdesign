var knob = document.querySelector(".knob");
var knob1 = document.querySelector(".knob1");
var knob2 = document.querySelector(".knob2");
var knob3 = document.querySelector(".knob3");

var mainknob = document.querySelector(".mybuttons");

var data = document.getElementById("arg");

var data1 = document.getElementById("peru");

var data2 = document.getElementById("nor");

var data3 = document.getElementById("por");

knob1.onclick = function () {
  data.classList.add("d-none");
  data2.classList.add("d-none");
  data3.classList.add("d-none");
  data1.classList.remove("d-none");

  knob2.onclick = function () {
    data.classList.add("d-none");
    data1.classList.add("d-none");
    data3.classList.add("d-none");
    data2.classList.remove("d-none");
  };
  knob3.onclick = function () {
    data.classList.add("d-none");
    data1.classList.add("d-none");
    data2.classList.add("d-none");
    data3.classList.remove("d-none");
  };
  knob.onclick = function () {
    data3.classList.add("d-none");
    data1.classList.add("d-none");
    data2.classList.add("d-none");
    data.classList.remove("d-none");
  };
};
