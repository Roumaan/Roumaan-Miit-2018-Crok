function registration() {
    'use strict';
    
    let form = document.forms[0];
    
    let login = form.elements[0].value;
    let email = form.elements[1].value
    
    let salt = MD5(Math.random(5000)+"");
    let password = MD5(form.elements[2].value+salt) + salt;
    let password2 = MD5(form.elements[3].value+salt) + salt;
    window.alert(login + " " +
        email + " " +
        password + " " +
        password2);
    return false;
}