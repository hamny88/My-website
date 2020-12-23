const input_name = document.querySelector(".username"),
    input_mail = document.querySelector(".email"),
    input_content = document.querySelector(".content")
    ;

const USERID = "user_wd5ncg0gvrV2MyTu3LMma",
    SERVICE_ID = "service_c0bhvl6",
    TEMPLATE_ID = "template_k991ov8"
    ;

function getInfo() {

    let CS = new Object();
    CS.name = input_name.value,
    CS.content = input_content.value,
    CS.mail = input_mail.value
    
    return CS;
}

function Sendmail() {
    CS_info = getInfo();
    console.log("mail")

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

}

function init() {
    console.log(input_name, input_mail, input_content);
    emailjs.init(USERID);
}

init();