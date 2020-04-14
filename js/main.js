

// Toggle Menu

function toggleMenu() {
    var elem = document.getElementById("navBar");
        elem.classList.add("active");
    
}

// Previous Postion of the Scroll
var preScrollpos = window.pageYOffset;

window.onscroll = function() {
    // Current Scroll Postion
    var currentScrollPos = window.pageYOffset;
    var buttonUp = getElementById("buttonUp");
    var buttonDown = getElementById("buttonDown");

    if(preScrollpos > currentScrollPos) {
        buttonUp.style.display = block;
    }

    else {
        buttonUp.style.display = none;
    }

    preScrollpos = currentScrollPos

}