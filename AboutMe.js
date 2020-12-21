
function typeName() {
    var typed3 = new Typed('.typed3', {
        strings: [`Nayoun hahm`, 'Ellie', '01101000 10011000 11110000'],
        typeSpeed: 20,
        backSpeed: 20,
        fadeOut: true,
        loop: true,
        smartBackspace: true
        // onComplete : function(){
        //     icons.classList.remove("none");
        //     icons.classList.add(SHOWING);
        // }
      });
}

function init() {
    console.log("AboutMe")
    typeName();
}

init();
