const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");

// CLICK ON BULLETS

$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".formulaire_contract").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "25%");
  $(".first_files").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "50%");
  $(".first_result").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "75%");
  $(".other_files").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "100%");
  $(".final_result").addClass("active").siblings().removeClass("active");
});

// CLICK ON BUTTONS PREV / NEXT

nextBtnFirst.addEventListener("click", function (event) {
  $(".step02").click();
});

nextBtnSec.addEventListener("click", function (event) {
  $(".step03").click();
});

nextBtnThird.addEventListener("click", function (event) {
  $(".step04").click();
});

nextBtnFourth.addEventListener("click", function (event) {
  $(".step05").click();
});

submitBtn.addEventListener("click", function () {
  $(".step03").click();
});

prevBtnSec.addEventListener("click", function (event) {
  $(".step01").click();
});

prevBtnThird.addEventListener("click", function (event) {
  $(".step02").click();
});

prevBtnFourth.addEventListener("click", function (event) {
  $(".step03").click();
});

prevBtnFifth.addEventListener("click", function (event) {
  $(".step03").click();
});
