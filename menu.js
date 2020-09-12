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

var card = document.querySelectorAll('.card');

card[0].addEventListener('click', function() {
    card[0].classList.toggle('is-flipped');
});

card[1].addEventListener('click', function() {
    card[1].classList.toggle('is-flipped');
});

card[2].addEventListener('click', function() {
    card[2].classList.toggle('is-flipped');
});

card[3].addEventListener('click', function() {
    card[3].classList.toggle('is-flipped');
});

card[4].addEventListener('click', function() {
    card[4].classList.toggle('is-flipped');
});

card[5].addEventListener('click', function() {
    card[5].classList.toggle('is-flipped');
});

