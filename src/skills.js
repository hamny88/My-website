const html = document.querySelector(".excellent");
const logo = document.querySelector(".div-html");
console.log(html)
const UP = "up";



function htmlOver() {
    html.classList.add("slideup");
    
}
function init() {
    logo.addEventListener("mouseover",htmlOver);
}

init();