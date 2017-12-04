$(function() {
  $("div").animate({ "height" : 300 }, 1000)
  .fadeOut(1000)
  .show(500)
  .animate({ "width" : 100 }, 1000)
  .css("background", "red");
});
