
// DROP DOWN MENU

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $(".nav").toggleClass("shade");
    $("#mainListDiv").fadeIn();
    $(".nav").fadeIn();
});

// HACKATHON REDIRECTS

function pageRedirect1() {
    window.location.href = "https://devpost.com/software/teconnect";
}    
function pageRedirect2() {
    window.location.href = "https://devpost.com/software/safety-buddy-l1phnt";
}    
function pageRedirect3() {
    window.location.href = "https://devpost.com/software/relief-point";
}

// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ARROW TO SCROLL TO TOP

mybutton = document.getElementById("scrollUp");

$(window).scroll(function() {
    if ($(document).scrollTop() > 500 || document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
});

// FLIP EXPERIENCE CARDS
var card = document.querySelectorAll('.card');

card[0].addEventListener('click', function() {
    card[0].classList.toggle('is-flipped');
    console.log("C");
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

