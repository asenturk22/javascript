window.onload = showTime;

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let fullName = prompt("Lutfen adinizi giriniz", "")
let myName = document.querySelector("#myName")
myName.innerHTML = capitalizeFirstLetter(fullName)

function checkTime(i) {
    return (i < 10) ? ("0" + i) : i;
}

function today(day) {
    let _today = ""

    switch (day) {
        case 0: _today="Pazar"; break;
        case 1: _today="Pazartesi"; break;
        case 2: _today="Salı"; break;
        case 3: _today="Çarşamba"; break;
        case 4: _today="Perşembe"; break;
        case 5: _today="Cuma"; break;
        case 6: _today="Cumartesi"; break;
    }

    return _today
}

function showTime() {
    let d = new Date();
    let h = checkTime(d.getHours());
    let m = checkTime(d.getMinutes());
    let s = checkTime(d.getSeconds());

    let text = `${h}:${m}:${s} ${today(d.getDay())}`

    //myClock id'li elemente yazdır. 
    document.querySelector("#myClock").innerHTML = text;        
    
    // her 1 saniyede showTime fonksiyonunu yeniden çalıştır
    t = setTimeout('showTime()', 1000)
}



