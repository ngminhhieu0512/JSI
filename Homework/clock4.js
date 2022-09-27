var minutes4 = 00;
var seconds4 = 00;
var minuteOutput4 = document.getElementById("minutes4");
var secondOutput4 = document.getElementById("seconds4");
var startButton4 = document.getElementById("startbtn4");
var stopButton4 = document.getElementById("stopbtn4");
var Interval4;

startButton4.addEventListener("click", () => {
  clearInterval(Interval4);
  Interval4 = setInterval(startTime4, 1000);
});

stopButton4.addEventListener("click", () => {
  clearInterval(Interval4);
  minutes4 = "00";
  seconds4 = "00";
  minuteOutput4.innerHTML = minutes4;
  secondOutput4.innerHTML = seconds4;
});

function startTime4() {
  seconds4++;
  if(seconds4 <= 9) {
    secondOutput4.innerHTML = "0" + seconds4;
  };

  if(seconds4 > 9) {
    secondOutput4.innerHTML = seconds4;
  };

  if(seconds4 > 59){
    minutes4++;
    minuteOutput4.innerHTML = "0" + minutes4;
    seconds4 = 0;
    secondOutput4.innerHTML = "0" + seconds4;
  }
  
  if(minutes4 > 9) {
    minuteOutput4.innerHTML = minutes4;
  }
}