const input_name = document.querySelector(".username"),
    input_mail = document.querySelector(".email"),
    input_content = document.querySelector(".content")
    ;

const USERID = "user_wd5ncg0gvrV2MyTu3LMma",
    SERVICE_ID = "service_c0bhvl6",
    TEMPLATE_ID = "template_k991ov8"
    ;

let CS = new Object();
var emailRgx = /\w+@\w+.(\w+.\w+)/g;

function getInfo() {
    CS.name = input_name.value,
    CS.content = input_content.value,
    CS.mail = input_mail.value
    return CS;
}

function validationCheck(str) {
    return emailRgx.test(str);
}

function Sendmail() {
    CS_info = getInfo();

    if(validationCheck(CS_info.mail) && CS_info.name !== "" ){
        var templateParams = {
            name:  CS_info.name,
            email :CS_info.mail,
            content : CS_info.content
        };
         
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               swal({
                   title: "Success",
                   text : "Your email sent successfully!",
                   icon: "success"
               });
               
            }, function(error) {
               console.log('FAILED...', error);
            });

    } else if(CS_info.name == "") {
        swal({
            title : "Error",
            text : "Please enter your name",
            icon : "error"
        });
    } else if(!validationCheck(CS_info.mail)) {
        swal({
            title : "Error",
            text : "Email address is not valid",
            icon : "error"
        });
    }
    

}

function init() {
    emailjs.init(USERID);
}

init();