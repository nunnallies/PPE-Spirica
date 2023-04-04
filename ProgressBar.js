// Sélectionne le bouton "Suivant" pour la première étape du formulaire
const nextBtnFirst = document.querySelector(".firstNext");

// Sélectionne le bouton "Précédent" pour la deuxième étape du formulaire
const prevBtnSec = document.querySelector(".prev-1");

// Sélectionne le bouton "Suivant" pour la deuxième étape du formulaire
const nextBtnSec = document.querySelector(".next-1");

// Sélectionne le bouton "Précédent" pour la troisième étape du formulaire
const prevBtnThird = document.querySelector(".prev-2");

// Sélectionne le bouton "Suivant" pour la troisième étape du formulaire
const nextBtnThird = document.querySelector(".next-2");

// Sélectionne le bouton "Précédent" pour la quatrième étape du formulaire
const prevBtnFourth = document.querySelector(".prev-3");

// Sélectionne le bouton "Suivant" pour la quatrième étape du formulaire
const nextBtnFourth = document.querySelector(".next-3");

// Sélectionne le bouton "Précédent" pour la cinquième étape du formulaire
const prevBtnFifth = document.querySelector(".prev-4");

// Sélectionne le bouton "Soumettre" pour la troisième étape du formulaire
const submitBtn = document.querySelector(".submit");

// __________________ CLICK ON BULLETS ____________________

$(".step").click(function () {
  // cliquer sur n'importe quel point de navigation
  $(this).addClass("active").prevAll().addClass("active"); // ajouter la classe "active" à l'élément cliqué et à tous les éléments précédents
  $(this).nextAll().removeClass("active"); // enlever la classe "active" à tous les éléments suivants
});

$(".step01").click(function () {
  // cliquer sur le point de navigation de la première étape
  $("#line-progress").css("width", "3%"); // mettre à jour la barre de progression
  $(".formulaire_contract").addClass("active").siblings().removeClass("active"); // afficher le formulaire de la première étape et cacher les autres formulaires
});

$(".step02").click(function () {
  // cliquer sur le point de navigation de la deuxième étape
  $("#line-progress").css("width", "25%"); // mettre à jour la barre de progression
  $(".first_files").addClass("active").siblings().removeClass("active"); // afficher les fichiers de la deuxieme étape et cacher les autres fichiers
});

$(".step03").click(function () {
  // cliquer sur le point de navigation de la troisième étape
  $("#line-progress").css("width", "50%"); // mettre à jour la barre de progression
  $(".first_result").addClass("active").siblings().removeClass("active"); // afficher les résultats de la troisieme étape et cacher les autres résultats
});

$(".step04").click(function () {
  // cliquer sur le point de navigation de la quatrième étape
  $("#line-progress").css("width", "75%"); // mettre à jour la barre de progression
  $(".other_files").addClass("active").siblings().removeClass("active"); // afficher les fichiers de la quatrième étape et cacher les autres fichiers
});

$(".step05").click(function () {
  // cliquer sur le point de navigation de la cinquième étape
  $("#line-progress").css("width", "100%"); // mettre à jour la barre de progression
  $(".final_result").addClass("active").siblings().removeClass("active"); // afficher les résultats finaux à la cinquième étape et cacher
});

// ___________________ CLICK ON BUTTONS PREV / NEXT ______________________

// Ajout d'un événement 'click' sur le bouton 'nextBtnFirst'
nextBtnFirst.addEventListener("click", function (event) {
  // Au clic sur le bouton 'nextBtnFirst', on déclenche un clic sur l'élément HTML ayant la classe 'step02'
  $(".step02").click();
});

// Ajout d'un événement 'click' sur le bouton 'nextBtnSec'
nextBtnSec.addEventListener("click", function (event) {
  // Au clic sur le bouton 'nextBtnSec', on déclenche un clic sur l'élément HTML ayant la classe 'step03'
  $(".step03").click();
});

// Ajout d'un événement 'click' sur le bouton 'nextBtnThird'
nextBtnThird.addEventListener("click", function (event) {
  // Au clic sur le bouton 'nextBtnThird', on déclenche un clic sur l'élément HTML ayant la classe 'step04'
  $(".step04").click();
});

// Ajout d'un événement 'click' sur le bouton 'nextBtnFourth'
nextBtnFourth.addEventListener("click", function (event) {
  // Au clic sur le bouton 'nextBtnFourth', on déclenche un clic sur l'élément HTML ayant la classe 'step05'
  $(".step05").click();
});

// Ajout d'un événement 'click' sur le bouton 'submitBtn'
submitBtn.addEventListener("click", function () {
  // Au clic sur le bouton 'submitBtn', on déclenche un clic sur l'élément HTML ayant la classe 'step03'
  $(".step03").click();
});

// Ajout d'un événement 'click' sur le bouton 'prevBtnSec'
prevBtnSec.addEventListener("click", function (event) {
  // Au clic sur le bouton 'prevBtnSec', on déclenche un clic sur l'élément HTML ayant la classe 'step01'
  $(".step01").click();
});

// Ajout d'un événement 'click' sur le bouton 'prevBtnThird'
prevBtnThird.addEventListener("click", function (event) {
  // Au clic sur le bouton 'prevBtnThird', on déclenche un clic sur l'élément HTML ayant la classe 'step02'
  $(".step02").click();
});

// Ajout d'un événement 'click' sur le bouton 'prevBtnFourth'
prevBtnFourth.addEventListener("click", function (event) {
  // Au clic sur le bouton 'prevBtnFourth', on déclenche un clic sur l'élément HTML ayant la classe 'step03'
  $(".step03").click();
});

// Ajout d'un événement 'click' sur le bouton 'prevBtnFifth'
prevBtnFifth.addEventListener("click", function (event) {
  // Au clic sur le bouton 'prevBtnFifth', on déclenche un clic sur l'élément HTML ayant la classe 'step03'
  $(".step03").click();
});
