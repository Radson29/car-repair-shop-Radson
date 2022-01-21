//pobranie danych
var imie = document.querySelector("#name");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var wiadomosc = document.querySelector("#wiadomosc");
var sukces = document.querySelector("#sukces");
var error = document.querySelectorAll(".error");


//walidacja danych
function validateForm() {
    clear();
    let errorFlag = false;
    if (imie.value.length < 1) {
        error[0].innerText ="Imie jest wymagane";
        imie.classList.add("error-border");
         errorFlag = true;
   }
    if (!emailIsValid(email.value)) {
        error[1].innerText ="Nieprawidłowy email";
        email.classList.add("error-border");
         errorFlag = true;
    }
    if (!phoneIsValid(phone.value)) {
        error[2].innerText ="Nieprawidłowy numer telefonu";
        phone.classList.add("error-border");
         errorFlag = true;
    }

    if (wiadomosc.value.length < 10) {
        error[3].innerText ="Wiadomość nie może byc pusta, wymagana ilość znaków: 10 ";
        wiadomosc.classList.add("error-border");
       errorFlag = true;
    }
    if (!errorFlag) {
        sukces.innerText = "Pomyślnie wysłano wiadomość !";


    }
}
//funkcja czyszczenia błędu
function clear() {
    for (let i = 0; i < error.length; i++){
        error[i].innerText = "";

    }
    sukces.innerText = "";
    imie.classList.remove("error-border");
    email.classList.remove("error-border");
    wiadomosc.classList.remove("error-border");
  phone.classList.remove("error-border");
    
}
//sprawdzenie poprawnosci emaila
function emailIsValid(email) {
    let wzor = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    return wzor.test(email);

}
//sprawdzenie poprawnosci numeru telefonu 
function phoneIsValid(phone) {
    let reg = /^([0-9]{9})$/;
    return reg.test(phone);

}