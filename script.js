function registration() {
    'use strict';
    
    let form = document.forms[0];
    
    let login = form.elements[0].value;
    
    //email section
    let email = form.elements[1].value
    
    if (!/(?=.*[@])(?=.*[.])/g) {
        
    }
    
    
    //password section
    let password1 = form.elements[2].value;
    let password2 = form.elements[3].value;
    
    let pasError = "";
    if (!/[0-9a-zA-Z]{8,50}/g.test(password1))
        pasError+="-Пароль должен быть больше 8 символов и меньше 50";
    if (!/(?=.*[0-9])/g.test(password1))
        pasError+="\n-Содержать хотя бы одну цифру";
    if (!/(?=.*[a-z])/g.test(password1))
        pasError+="\n-Содержать хотя бы одну латинскую букву в нижнем регистер";
    if (!/(?=.*[A-Z])/g.test(password1))
        pasError+="\n-Содержать хотя бы одну латинскую букву в верхнем регистре";
    if (password1 != password2) {
        pasError+="\n-Пароли должны совпадать"
    }
    
    if (pasError != '') {
        alert(pasError)
        return false
    }

    let salt = MD5(Math.random(5000)+"");
    password = MD5(password+salt) + salt;
   
    
        
    window.alert(login + " " +
        email + " " +
        password + " " +
        password2);
    return true;
}

//-Пароль должен быть больше 8 символов и меньше 50 \n-Содержать хотя бы одну цифру \n-Одну латинскую букву в нижнем регистер \n-Одну латинскую букву в верхнем регистре
