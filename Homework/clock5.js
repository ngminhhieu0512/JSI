var minutes5 = 00;
var seconds5 = 00;
var minuteOutput5 = document.getElementById("minutes5");
var secondOutput5 = document.getElementById("seconds5");
var startButton5 = document.getElementById("startbtn5");
var stopButton5 = document.getElementById("stopbtn5");
var Interval5;

startButton5.addEventListener("click", () => {
  clearInterval(Interval5);
  Interval5 = setInterval(startTime5, 1000);
});

stopButton5.addEventListener("click", () => {
  clearInterval(Interval5);
  minutes5 = "00";
  seconds5 = "00";
  minuteOutput5.innerHTML = minutes5;
  secondOutput5.innerHTML = seconds5;
});

function startTime5() {
  seconds5++;
  if(seconds5 <= 9) {
    secondOutput5.innerHTML = "0" + seconds5;
  };

  if(seconds5 > 9) {
    secondOutput5.innerHTML = seconds5;
  };

  if(seconds5 > 59){
    minutes5++;
    minuteOutput5.innerHTML = "0" + minutes5;
    seconds5 = 0;
    secondOutput5.innerHTML = "0" + seconds5;
  }
  
  if(minutes5 > 9) {
    minuteOutput5.innerHTML = minutes5;
  }
}