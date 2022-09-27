var minutes3 = 00;
var seconds3 = 00;
var minuteOutput3 = document.getElementById("minutes3");
var secondOutput3 = document.getElementById("seconds3");
var startButton3 = document.getElementById("startbtn3");
var stopButton3 = document.getElementById("stopbtn3");
var Interval3;

startButton3.addEventListener("click", () => {
  clearInterval(Interval3);
  Interval3 = setInterval(startTime3, 1000);
});

stopButton3.addEventListener("click", () => {
  clearInterval(Interval3);
  minutes3 = "00";
  seconds3 = "00";
  minuteOutput3.innerHTML = minutes3;
  secondOutput3.innerHTML = seconds3;
});

function startTime3() {
  seconds3++;
  if(seconds3 <= 9) {
    secondOutput3.innerHTML = "0" + seconds3;
  };

  if(seconds3 > 9) {
    secondOutput3.innerHTML = seconds3;
  };

  if(seconds3 > 59){
    minutes3++;
    minuteOutput3.innerHTML = "0" + minutes3;
    seconds3 = 0;
    secondOutput3.innerHTML = "0" + seconds3;
  }
  
  if(minutes3 > 9) {
    minuteOutput3.innerHTML = minutes3;
  }
}