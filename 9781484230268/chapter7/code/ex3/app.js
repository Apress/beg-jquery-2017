$(function() {
  var accordion = $("#accordion");
  var headings = $("h2");
  var paragraphs = $("p");

  var animateAccordion = function(elem, duration, easing) {
    paragraphs.stop(true, true).slideUp(duration, easing);
    $(elem).stop(true, true).slideDown(duration, easing);
  }

  paragraphs.not(":first").hide();
  accordion.on("click", "h2", function() {
    var t = $(this);
    var tPara = t.next();
    if(!tPara.is(":visible")) {
      tPara.trigger("showParagraph");
    }
  });

  accordion.on("showParagraph", "p", function() {
    animateAccordion(this, 600, "easeInCirc");
  });
});
