const toggle = document.querySelector(".navbar__toggleBtn"),
    navbar__menu = document.querySelector(".navbar__menu"),
    navbar__icons = document.querySelector(".navbar__icons")
    advice__box = document.querySelector(".advice-box")
    ;
    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll("a");
    const bounce = "bounce";
    const inactive = "inactive";
    const ACTIVE = "active";

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

// function moveMouse(e) {
//     console.log("movemouse")
//     const x = e.clientX;
//     const y = e.clientY;
//     cursor.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
// }
// function disableAnimation() {
//     const hasBounceClass = cursor.classList.contains(bounce);
//     if(hasBounceClass) {
//         cursor.classList.add(inactive);
//         cursor.classList.remove(bounce);
//     } else {
//         cursor.classList.add(bounce);
//         cursor.classList.reomove(inactive);
//     }
// }

function slick() {
    const slider = $(".vertical-slider");
    slider.slick({
      dots: true,
          vertical: true,
          arrows: false,
          verticalSwiping: true,
          swipe:true,
          draggable : true,
          infinite: false,
    });

    slider.on('wheel', (function(e) {
        e.preventDefault();
    
        if(e.originalEvent.deltaY > 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
      }));
}

function callAdvice() {
    console.log("callAdvice")
    fetch(`https://api.adviceslip.com/advice`).then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json.slip.advice)
        const advice = json.slip.advice;
        const span_advice = document.createElement("span");
        span_advice.innerText = advice;
        advice__box.appendChild(span_advice);
        span_advice.classList.add("advice");
    })
    ;
}

function init() {
    callAdvice();
    slick();
   // document.addEventListener("mousemove",moveMouse);
    // links.forEach(link => link.addEventListener("mouseover", disableAnimation));
    // links.forEach(link => link.addEventListener("mouseleave", disableAnimation));
    toggle.addEventListener("click",handleClickEvent);
    greeting();
    
}

  
init();

