$(function() {
  $("h5").on("click", function(event) {
    alert("header");
    event.stopPropagation();
  });
  $("div").on("click", function() {
    alert("div");
  });
});
