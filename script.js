let ten= 10
let Interval;
let outputten= document.getElementById("display");
let start= document.getElementById("start");
let stop= document.getElementById("stops");
let reset= document.getElementById("reset");

start.addEventListener("click", () => {
    clearInterval(Interval);
    Interval=setInterval(timer, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(Interval);
});

reset.addEventListener("click", () => {
    clearInterval(Interval);
    ten="10";
    outputten.innerHTML=ten;
});

function timer() {
    ten--;
    if (ten<=9) {
        outputten.innerHTML="0" +ten;
    }
    if (ten == 0 ){
        clearInterval(Interval);
    }
}