$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//         $('.nav').addClass('affix');
//         console.log("OK");
//     } else {
//         $('.nav').removeClass('affix');
//     }
// });
