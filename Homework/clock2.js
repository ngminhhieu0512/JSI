var minutes2 = 00;
var seconds2 = 00;
var minuteOutput2 = document.getElementById("minutes2");
var secondOutput2 = document.getElementById("seconds2");
var startButton2 = document.getElementById("startbtn2");
var stopButton2 = document.getElementById("stopbtn2");
var Interval2;

startButton2.addEventListener("click", () => {
  clearInterval(Interval2);
  Interval2 = setInterval(startTime2, 1000);
});

stopButton2.addEventListener("click", () => {
  clearInterval(Interval2);
  minutes2 = "00";
  seconds2 = "00";
  minuteOutput2.innerHTML = minutes2;
  secondOutput2.innerHTML = seconds2;
});

function startTime2() {
  seconds2++;
  if(seconds2 <= 9) {
    secondOutput2.innerHTML = "0" + seconds2;
  };

  if(seconds2 > 9) {
    secondOutput2.innerHTML = seconds2;
  };

  if(seconds2 > 59){
    minutes2++;
    minuteOutput2.innerHTML = "0" + minutes2;
    seconds2 = 0;
    secondOutput2.innerHTML = "0" + seconds2;
  }
  
  if(minutes2 > 9) {
    minuteOutput2.innerHTML = minutes2;
  }
}