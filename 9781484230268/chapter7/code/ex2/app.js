$(function() {
  $("h5").on("click", function() {
    $("div").stop(true, true).fadeToggle(500);
  });
});
