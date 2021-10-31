/* Enforce HTTPS */
if (window.location.protocol === "http:") {
    window.location.href = window.location.href.replace(window.location.protocol,"https:");
 }   

/* Responsive menu function */
function Condense() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive animate_animated animate_slideInDown";
    } else {
        x.className = "topnav";
    }
}

/* On-scroll functions
window.onscroll = function() {
    menuAppearance()
};


function menuAppearance() {
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("myTopnav").className = "topnav";
    }
}
*/

window.onscroll = function() {
    missionStatement()
    ministries()
};

var msa = window.matchMedia("(min-height: 1px) and (max-height: 1100px)");

function missionStatement() {
    if (msa.matches) {
        if (document.documentElement.scrollTop > 300) {
            document.getElementById("MS").className = "mission-statement col-9 animate__animated animate__fadeInRight";
        }
    }
}

function ministries() {
    if (msa.matches) {
        if (document.documentElement.scrollTop > 785) {
            document.getElementById("Ministries").className = "ministries-title col-12 animate__animated animate__zoomIn";
        }
    }
}

/* msa.addEventListener(missionStatement) */

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






/* W3 Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();
  */

  /* KR Menu */
  function openKRMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("kr-new-menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("kr-tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" kr-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " kr-red";
  }
  document.getElementById("krLink").click();


  /* Slide-Show text
  var myIndex = 0;
    carousel();

function carousel() {
    var z;
    var y = document.getElementsByClassName("mySlides");
    for (z = 0; z < y.length; z++) {
        y[z].style.display = "none";
    }
    myIndex++;
    if (myIndex > y.length) {
        myIndex = 1
    }
    
    y[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
    
}
*/