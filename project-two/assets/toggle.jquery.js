$(document).ready(function () {
    //ID or Class name of the button goes into the first section
    $('.intro-button-initial').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".introduction").removeClass("invisible");
        $(".introduction").addClass("visible");
        $(".intro-button-initial").addClass("invisible");
    });

    $('.intro-button-close').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".introduction").addClass("invisible");
        $(".introduction").removeClass("visible");
          $(".intro-button-initial").removeClass("invisible");
    });

    $('.sun-button-initial').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".sun-info").removeClass("invisible");
        $(".sun-info").addClass("visible");
        $(".sun-button-initial").addClass("invisible");
    });

    $('.sun-button-close').click(function () {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".sun-info").addClass("invisible");
        $(".sun-info").removeClass("visible");
          $(".sun-button-initial").removeClass("invisible");
    });
  });
