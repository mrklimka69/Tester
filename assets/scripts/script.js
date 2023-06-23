//"25.08.2022 22:00"

let start = new Date("08.25.2022 22:00");
let now = new Date();
document.querySelector('.now').innerHTML = "Сейчас - " + getButtyDate(now) + " " + getButtyTime(now);

let out = "";
const diff = now - start;

let years = diff / (86400000 * 365);
out += "Прошло лет: ";
out += parseInt(years);
out += "<br>";

let months = diff / (86400000 * 30.4167);
out += "Прошло месяцев: ";
out += parseInt(months);
out += "<br>";

let days = diff / 86400000;
out += "Прошло дней: ";
out += parseInt(days);
out += "<br>";

let hours = diff / 3600000;
out += "Прошло часов: ";
out += parseInt(hours);
out += "<br>";

let minutes = diff / 60000;
out += "Прошло минут: ";
out += parseInt(minutes);
out += "<br>";

let seconds = diff / 1000;
out += "Прошло секунд: ";
out += parseInt(seconds);
out += "<br>";

out += "Прошло миллисекунд: " + diff;
out += "<br>";

document.querySelector('.content').innerHTML = out;


function getButtyDate(date) {
    let day = "";
    if ((date.getDate()) < 10) {
        day = "0" + date.getDate();
    } else {
        day = date.getDate();
    }


    let month = "";
    if ((date.getMonth() + 1) < 10) {
        month = "0" + (date.getMonth() + 1);
    } else {
        month = (date.getMonth() + 1);
    }

    return day + "." + month + "." + date.getFullYear();
}

function getButtyTime(date) {
    let hour = "";
    if ((date.getHours()) < 10) {
        hour = "0" + date.getHours();
    } else {
        hour = date.getHours();
    }

    let minute = "";
    if ((date.getMinutes()) < 10) {
        minute = "0" + date.getMinutes();
    } else {
        minute = date.getMinutes();
    }

    return hour + ":" + minute;
}