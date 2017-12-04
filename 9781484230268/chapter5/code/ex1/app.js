$(document).ready(function() {
  var headings = $("h2");
  var paragraphs = $("p");
  paragraphs.not(":first").hide();
  headings.on("click", function() {
    var t = $(this);
    var tPara = t.next();
    if(tPara.is(":visible")) {
      return;
    }
    paragraphs.slideUp("normal");
    tPara.slideDown("normal");
  });
});
