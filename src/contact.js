const USERID = "user_wd5ncg0gvrV2MyTu3LMma";


function Sendmail() {
    console.log("mail")
    //window.open('mailto:ellie.hahm@gmail.com');
}

function init() {
    
    emailjs.init(USERID);
}

init();