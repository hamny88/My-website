const toggle = document.querySelector(".navbar__toggleBtn"),
    navbar__menu = document.querySelector(".navbar__menu"),
    navbar__icons = document.querySelector(".navbar__icons")
    advice__box = document.querySelector(".advice-box"),
    name__form = document.querySelector(".name-form"),
    nameInput = document.querySelector(".nameInput"),
    form = document.querySelector(".name-form"),
    icons = document.querySelector(".icons"),
    author = document.querySelector(".author")
    ;

     links = document.querySelectorAll("a"),
     bounce = "bounce",
     inactive = "inactive",
     ACTIVE = "active",
     SHOWING = "showing"
     ;

function handleClickEvent(event) {
    console.log("toggle clicks")
    navbar__menu.classList.toggle(ACTIVE);
    navbar__icons.classList.toggle(ACTIVE);
}


function printName(currentValue) {

    var typed2 = new Typed('#typed2', {
        strings: [`Welcome ${currentValue}`, 'Feel free to browse', '👋👋👋👋👋👋👋'],
        typeSpeed: 20,
        backSpeed: 20,
        fadeOut: true,
        loop: false,
        onComplete : function(){
            icons.classList.remove("none");
            icons.classList.add(SHOWING);
        }
      });
}

function handleSubmit(event) {
    console.log("input")
    event.preventDefault();
    const currentValue = nameInput.value;
    if(currentValue !== "") {
        console.log(currentValue)
        nameInput.value = "";
        name__form.classList.remove("showing");
        printName(currentValue);
        name__form.classList.add("fadeOut");
    }
}


function greeting() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed : 35,
        onComplete: function(self) { self.cursor.remove();
            name__form.classList.add(SHOWING);
            form.addEventListener("submit",handleSubmit);
        }
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
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    const rand = Math.floor(Math.random() * Math.floor(1642));

    const advice = data[rand].text;
    const advice_author = data[rand].author;
    const span_advice = document.createElement("span");
    span_advice.innerHTML = advice + '<br>-' +advice_author ;
    advice__box.appendChild(span_advice);
    span_advice.classList.add("advice");
  });
}

function init() {
    icons.classList.add("none");
    callAdvice();
    slick();
   // document.addEventListener("mousemove",moveMouse);
    // links.forEach(link => link.addEventListener("mouseover", disableAnimation));
    // links.forEach(link => link.addEventListener("mouseleave", disableAnimation));
  //  toggle.addEventListener("click",handleClickEvent);
    greeting();
    
}


  
init();

