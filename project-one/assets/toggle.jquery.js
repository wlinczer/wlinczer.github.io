$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".letter-analysis").toggleClass("visible");
  });
});

$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#button').mouseenter(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#x-mark").addClass("x-op");
  });
});

$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#button').mouseleave(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#x-mark").removeClass("x-op");
  });
});




// $('#button').mouseover(function() {
//ID or Class name of the modal you want to appear on click goes into this second area.
// $("#x-mark").toggleClass("x-op");
// });
