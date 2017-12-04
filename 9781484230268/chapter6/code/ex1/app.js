$(function() {
  $("body").on("click", "p", function() {
    alert("Hello World");
  });
  $("<p />", {
    text: "Paragraph 6"
  }).appendTo("body");
});
