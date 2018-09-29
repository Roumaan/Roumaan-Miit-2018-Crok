let form = document.forms[0];  

function check() {
    let isRight = true;
    
    let login = form.login.value;
    if (login == "") {
        form.logError.style.visibility = "visible"
        form.logError.title = "Это поле обязательно"
        isRight = false;
    } else {
        form.logError.style.visibility = "hidden";
        form.logError.title="";
    }
    
    let email = form.email.value;
    
    if (email == "") {
        form.emError.style.visibility = "visible";
        form.emError.title = "Это поле обязательно";
        isRight = false;
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
        form.emError.style.visibility = "visible";
        form.emError.title = "Адрес должен быть вида example@example.com";
    } else {
        form.emError.style.visibility = "hidden";
        form.emError.title="";
    }
    
    let password1 = form.password1.value;    
    if (password1 == "") {
        form.pasError.style.visibility = "visible";
        form.pasError.title = "Это поле обязательно";
        isRight = false;   
    } else {
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
            isRight = false;
        } else {
        form.pasError.style.visibility = "hidden";
        form.pasError.title = pasError;
        }
    }
    
    let password2 = form.password2.value;
    if (password2 == "") {
        form.pasEqError.style.visibility = "visible";
        form.pasEqError.title = "Это поле обязательно";
        isRight = false;   
    } else if (password1 != password2) {
        form.pasEqError.style.visibility = "visible";
        form.pasEqError.title="-Пароли должны совпадать";
        isRight = false;
    } else {
        form.pasEqError.style.visibility = "hidden";
        form.pasEqError.title="";
    }
    return isRight;
}

function registration() {
    if (check()) {
        let login = form.login.value;
        let email = form.email.value;
        let password1 = form.password1.value;
        let password2 = form.password2.value;

        let salt = MD5(Math.random(5000)+"");
        password1 = MD5(password+salt) + salt;
        form.submit();
    }
    
    return false;
}