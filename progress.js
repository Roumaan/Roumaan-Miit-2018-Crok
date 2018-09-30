function conf_progr(obj, val) {
    let back = obj.children[0];
    let front = back.children[0];
    let percents = obj.children[1];
    
    let x = 0;
    let id = setInterval(prog_dym, 10)
    function prog_dym() {
        if (x >= val || x >= 100) {
            clearInterval(id)
        } else {
            x++;
            front.style.width = x + '%'
            percents.innerHTML = x +'%'
            percents.style.marginLeft = 0.01*x* parseInt(getComputedStyle(back).width) - 7 + 'px';
        }
    }
}

let bars = document.getElementsByClassName('progress');
for (let i = 0; i < bars.length; i++) {
     conf_progr(bars[i], Math.random()*95);
}

