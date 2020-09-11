$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 100) {
//         $('.nav').addClass('affix');
//         console.log("OK");
//     } else {
//         $('.nav').removeClass('affix');
//     }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
