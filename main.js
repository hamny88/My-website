const toggle = document.querySelector(".navbar__toggleBtn"),
    navbar__menu = document.querySelector(".navbar__menu"),
    navbar__icons = document.querySelector(".navbar__icons")
    ;
const ACTIVE = "active";
var i = 0;
var txt = 'Hello world!';
var speed = 100;
function handleClickEvent(event) {
    console.log("toggle clicks")
    navbar__menu.classList.toggle(ACTIVE);
    navbar__icons.classList.toggle(ACTIVE);
}

function greeting() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed : 35
      });
}

function init() {
    toggle.addEventListener("click",handleClickEvent);
    greeting();
}

init();