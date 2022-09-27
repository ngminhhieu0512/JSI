var minutes1 = 00;
var seconds1 = 00;
var minuteOutput1 = document.getElementById("minutes1");
var secondOutput1 = document.getElementById("seconds1");
var startButton1 = document.getElementById("startbtn1");
var stopButton1 = document.getElementById("stopbtn1");
var Interval1;

startButton1.addEventListener("click", () => {
  clearInterval(Interval1);
  Interval1 = setInterval(startTime1, 1000);
});

stopButton1.addEventListener("click", () => {
  clearInterval(Interval1);
  minutes1 = "00";
  seconds1 = "00";
  minuteOutput1.innerHTML = minutes1;
  secondOutput1.innerHTML = seconds1;
});

function startTime1() {
  seconds1++;
  if(seconds1 <= 9) {
    secondOutput1.innerHTML = "0" + seconds1;
  };

  if(seconds1 > 9) {
    secondOutput1.innerHTML = seconds1;
  };

  if(seconds1 > 59){
    minutes1++;
    minuteOutput1.innerHTML = "0" + minutes1;
    seconds1 = 0;
    secondOutput1.innerHTML = "0" + seconds1;
  }
  
  if(minutes1 > 9) {
    minuteOutput1.innerHTML = minutes1;
  }
}