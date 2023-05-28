const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

const yearEl = document.getElementById("year");


updateCountdown();

function updateCountdown(){

    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    if(gap<=0){
        yearEl.innerText = "HAPPY NEW YEAR!!!!!";
        document.getElementById("h2").remove();
        dayEl.innerText = 00;
        hourEl.innerText = 00;
        minuteEl.innerText = 00;
        secondEl.innerText = 00;
        return 0;
    }


    setTimeout(updateCountdown, 1000);
}