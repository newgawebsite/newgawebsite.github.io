
/* Sunday Morning Modal */
var sModal = document.getElementById("sunModal");
var sNav = document.getElementById("sunNav");
var sSpan = document.getElementsByClassName("hz-close")[0];

/* Wednesday Modal */
var wModal = document.getElementById("wedModal");
var wNav = document.getElementById("wedNav");
var wSpan = document.getElementsByClassName("hz-close-wed")[0];

/* Address Map Modal */
var aModal = document.getElementById("addModal");
var aNav = document.getElementById("addNav");
var aSpan = document.getElementsByClassName("hz-close-add")[0];

/* Open modal on button click 
function openSun() {
    document.getElementsByClassName("hz-modal").style.display = "block";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeInUpBig";
}
*/
sNav.onclick = function() {
    sModal.style.display = "block";
    document.getElementById("sunModal").className = "hz-modal col-12";
    document.getElementById("sm").className = "hz-modal-sun animate__animated animate__fadeInUp";
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


/* Open modal on button click 
function openSun() {
    document.getElementsByClassName("hz-modal").style.display = "block";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeInUpBig";
}
*/
wNav.onclick = function() {
    wModal.style.display = "block";
    document.getElementById("wedModal").className = "hz-modal col-12";
    document.getElementById("wm").className = "hz-modal-sun animate__animated animate__fadeInUp";
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




/* Open modal on button click 
function openSun() {
    document.getElementsByClassName("hz-modal").style.display = "block";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeInUpBig";
}
*/
aNav.onclick = function() {
    aModal.style.display = "block";
    document.getElementById("addModal").className = "hz-modal col-12";
    document.getElementById("am").className = "hz-modal-sun col-6 animate__animated animate__fadeInUp";
}

/* Close the modal if users clicks the "X", or anywhere outside the modal
function closeSun() {
    document.getElementsByClassName("hz-modal").style.display = "none";
    document.getElementById("sunNav").className = "hz-modal animate__animated animate__fadeOutDown";
}
*/

aSpan.onclick = function() {
    aModal.style.display = "none";
    document.getElementById("am").className = "hz-modal-sun animate__animated animate__fadeOutDown";
}

/* Close all modals if the user clicks outside the window */
window.onclick = function(event) {
    if (event.target == sModal || event.target == wModal || event.target == aModal) {
        sModal.style.display = "none";
        wModal.style.display = "none";
        aModal.style.display = "none";
    }
}
