/* Slideshow Settings */
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 1900);
}

/* New Building Slideshow Settings */
var nbIndex = 0;
nbCarousel();

function nbCarousel() {
    var n;
    var b = document.getElementsByClassName("nbSlides");
    for (n = 0; n < b.length; n++) {
        b[n].style.display = "none";
    }
    nbIndex++;
    if (nbIndex > b.length) {
        nbIndex = 1
    }
    b[nbIndex-1].style.display = "inline-block";
    setTimeout(nbCarousel, 1900);
}

/* Fixed Menu Settings */
function fixedMenu(x) {
    x.classList.toggle("change");
}

function openSlideMenu() {
    document.getElementById('myNav').classList.toggle("open");
}

/* Sunday Morning Modal
var sunModal = document.getElementById("sunModal");

var sunNav = document.getElementById("sunNav");

var sunSpan = document.getElementsByClassName("close")[0];

/* Open modal on button click
function openSun() {
    document.getElementsByClassName("hz-modal").style.display = "block";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeInUpBig";
}

/* Close the modal if users clicks the "X", or anywhere outside the modal
function closeSun() {
    document.getElementsByClassName("hz-modal").style.display = "none";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeOutDown";
}

window.onclick = function(event) {
    if (event.target == sunModal) {
        document.getElementsByClassName("hz-modal").style.display = "none";
        document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeOutDown";
    }
}
*/