let data1 = document.querySelector("#firstname");

let data2 = document.querySelector("#surname");

let data3 = document.querySelector("#email");

let data4 = document.querySelector("#password");

let data5 = document.querySelector("#confirmpassword");

let err1 = document.querySelector(".fillingErr");

let err2 = document.querySelector(".characterErr");

let err22 = document.querySelector(".characterErr1");

let err33 = document.querySelector(".characterErr2");

let err3 = document.querySelector(".matchErr");

let err4 = document.querySelector(".passCharacErr");

let btn = document.querySelector(".submit");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.onclick = function () {
  if (data1.value.trim() == "" || data1.value.trim().length < 5) {
    err2.classList.remove("d-none");
  }
  if (data2.value.trim() == "" || data2.value.trim().length < 5) {
    err22.classList.remove("d-none");
  }
  if (data3.value.trim() == "" || data3.value.trim().length < 5) {
    err33.classList.remove("d-none");
  }
  if (data4.value.trim() == "" || data4.value.trim().length < 8) {
    err4.classList.remove("d-none");
  }
  if (data5.value != data4.value) {
    err3.classList.remove("d-none");
  }
};
