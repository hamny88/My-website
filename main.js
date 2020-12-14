const toggle = document.querySelector(".navbar__toggleBtn"),
    navbar__menu = document.querySelector(".navbar__menu"),
    navbar__icons = document.querySelector(".navbar__icons")
    ;
const ACTIVE = "active";
function handleClickEvent(event) {
    console.log("toggle clicks")
    navbar__menu.classList.toggle(ACTIVE);
    navbar__icons.classList.toggle(ACTIVE);
}
function init() {
    toggle.addEventListener("click",handleClickEvent);
}

init();