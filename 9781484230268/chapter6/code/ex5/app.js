$(function() {
  $("h5").on("click", function() {
    $("div").trigger("bgchange");
  });

  $("div").on("bgchange", function() {
    var t = $(this);
    t.css("background-color", "blue");
  });
});
