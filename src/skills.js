const html = document.querySelector(".excellent");
console.log(html)
const UP = "up";



function htmlup() {
    console.log("htmlup")
    html.classList.add("pop");
    
}
function init() {
    console.log("skills")
    html.classList.add("none");
}

init();