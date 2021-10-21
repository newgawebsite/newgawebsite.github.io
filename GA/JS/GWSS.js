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


/* Sunday Morning Modal */
var sModal = document.getElementById("sunModal");

var sNav = document.getElementById("sunNav");

var sSpan = document.getElementsByClassName("hz-close")[0];

/* Open modal on button click 
function openSun() {
    document.getElementsByClassName("hz-modal").style.display = "block";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeInUpBig";
}
*/
sNav.onclick = function() {
    sModal.style.display = "block";
    document.getElementById("sunModal").className = "hz-modal";
    document.getElementById("sm").className = "hz-modal-sun animate__animated animate__fadeInUpBig";
}

/* Close the modal if users clicks the "X", or anywhere outside the modal
function closeSun() {
    document.getElementsByClassName("hz-modal").style.display = "none";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeOutDown";
}
*/

sSpan.onclick = function() {
    sModal.style.display = "none";
    document.getElementById("sm").className = "hz-modal-sun animate__animated animate__fadeOutDown";
}

window.onclick = function(event) {
    if (event.target == sModal) {
        sModal.style.display = "none";
        setTimeout(event, 900);
        document.getElementById("sm").className = " hz-modal-sunanimate__animated animate__fadeOutDown";
    }
}

/* Sunday Morning Modal */
var wModal = document.getElementById("wedModal");

var wNav = document.getElementById("wedNav");

var wSpan = document.getElementsByClassName("hz-close")[0];

/* Open modal on button click 
function openSun() {
    document.getElementsByClassName("hz-modal").style.display = "block";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeInUpBig";
}
*/
wNav.onclick = function() {
    wModal.style.display = "block";
    document.getElementById("wedModal").className = "hz-modal";
    document.getElementById("wm").className = "hz-modal-sun animate__animated animate__fadeInUpBig";
}

/* Close the modal if users clicks the "X", or anywhere outside the modal
function closeSun() {
    document.getElementsByClassName("hz-modal").style.display = "none";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeOutDown";
}
*/

wSpan.onclick = function() {
    wModal.style.display = "none";
    document.getElementById("wm").className = "hz-modal-sun animate__animated animate__fadeOutDown";
}

window.onclick = function(event) {
    if (event.target == wModal) {
        wModal.style.display = "none";
        setTimeout(event, 900);
        document.getElementById("wm").className = " hz-modal-sunanimate__animated animate__fadeOutDown";
    }
}
