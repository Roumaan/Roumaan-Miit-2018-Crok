let form = document.forms[0];  

function emChange() {
    let email = form.email.value;
    
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
        form.emError.style.visibility = "visible";
        form.emError.title = "-Адрес должен быть вида example@example.com";
        return false;
    } else {
        form.emError.style.visibility = "hidden";
        form.emError.title="";
    }
    
    return true;
}

function pasChange() {
    let password1 = form.password1.value;
    let password2 = form.password2.value;
    
    let pasError = "";
    if (!/[0-9a-zA-Z]{8,50}/g.test(password1))
        pasError+="-Пароль должен быть больше 8 символов и меньше 50";
    if (!/(?=.*[0-9])/g.test(password1))
        pasError+="\n-Пароль должен cодержать хотя бы одну цифру";
    if (!/(?=.*[a-z])/g.test(password1))
        pasError+="\n-Пароль должен cодержать хотя бы одну латинскую букву в нижнем регистре";
    if (!/(?=.*[A-Z])/g.test(password1))
        pasError+="\n-Пароль должен cодержать хотя бы одну латинскую букву в верхнем регистре";
    
    if (pasError != '') {
        form.pasError.style.visibility = "visible";
        form.pasError.title = pasError;
        return false;
    } else {
        form.pasError.style.visibility = "hidden";
        form.pasError.title = pasError;
    }
    
    
    if (password1 != password2) {
        form.pasEqError.style.visibility = "visible";
        form.pasEqError.title="-Пароли должны совпадать";
        return false;
    } else {
        form.pasEqError.style.visibility = "hidden";
        form.pasEqError.title="";
    }
    
    return true
}

function check() {
    return emChange() && pasChange();
}

function registration() {
    if (check()) {
        let login = form.login.value;
        let email = form.email.value;
        let password1 = form.password1.value;
        let password2 = form.password2.value;

        let salt = MD5(Math.random(5000)+"");
        password1 = MD5(password+salt) + salt;
        return true;
    }
    
    return false;
}