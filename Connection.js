// Show Password
// Lorsque l'utilisateur clique sur l'élément avec la classe "show-pass"
$(".show-pass").on("click", function () {
  // Récupère le type de l'élément "input" précédent
  var type = $(this).prev("input").attr("type");
  // Si le type est "password"
  if (type == "password") {
    // Change le type en "text"
    $(this).prev("input").attr("type", "text");
    // Change l'icône de l'élément "i" à l'intérieur de l'élément cliqué
    $(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
  } else {
    // Sinon, change le type en "password"
    $(this).prev("input").attr("type", "password");
    // Change l'icône de l'élément "i" à l'intérieur de l'élément cliqué
    $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
  }
});
