const inpurl = document.getElementById("inp-url");
const freqtime = document.getElementById("freq-time");
const btn = document.getElementById("tri-btn");

let isRunning = 0;
let interVal = 0;
let windo = 0;

btn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(interVal);
    btn.innerText = "Start";
    isRunning=0;
  } else {
    let url = inpurl.value;
    windo = window.open(url);
    interVal = setInterval(() => {
      windo.close();
      windo = window.open(url);
    }, freqtime.value);
    btn.innerText = "Stop";
    isRunning=1;
  }
});
