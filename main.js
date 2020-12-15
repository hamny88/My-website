const toggle = document.querySelector(".navbar__toggleBtn"),
    navbar__menu = document.querySelector(".navbar__menu"),
    navbar__icons = document.querySelector(".navbar__icons")
    ;
    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll("a");
    const bounce = "bounce";
    const inactive = "inactive";

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

function moveMouse(e) {
    console.log("movemouse")
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
}
function disableAnimation() {
    const hasBounceClass = cursor.classList.contains(bounce);
    if(hasBounceClass) {
        cursor.classList.add(inactive);
        cursor.classList.remove(bounce);
    } else {
        cursor.classList.add(bounce);
        cursor.classList.reomove(inactive);
    }
}
function init() {
    document.addEventListener("mousemove",moveMouse);
    // links.forEach(link => link.addEventListener("mouseover", disableAnimation));
    // links.forEach(link => link.addEventListener("mouseleave", disableAnimation));
    toggle.addEventListener("click",handleClickEvent);
    greeting();
}

init();