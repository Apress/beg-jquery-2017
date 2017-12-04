$(document).ready(function() {
  $("p").filter(function() {
    return $(this).children("strong").length > 0;
  }).css("background", "red");
});
