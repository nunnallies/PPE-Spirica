// Show Password
$(".show-pass").on("click", function () {
  var type = $(this).prev("input").attr("type");
  if (type == "password") {
    $(this).prev("input").attr("type", "text");
    $(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
  } else {
    $(this).prev("input").attr("type", "password");
    $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
  }
});
