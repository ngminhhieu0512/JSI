var stopAllBtn = document.getElementById("stopall");
var minuteAll;
var secondAll;

stopAllBtn.addEventListener('click', () => {
    clearInterval(Interval1);
    clearInterval(Interval2);
    clearInterval(Interval3);
    clearInterval(Interval4);
    clearInterval(Interval5);

    minuteAll = "00";
    secondAll = "00";
    minuteOutput1.innerHTML = minuteAll;
    minuteOutput2.innerHTML = minuteAll;
    minuteOutput3.innerHTML = minuteAll;
    minuteOutput4.innerHTML = minuteAll;
    minuteOutput5.innerHTML = minuteAll;
    secondOutput1.innerHTML = secondAll;
    secondOutput2.innerHTML = secondAll;
    secondOutput3.innerHTML = secondAll;
    secondOutput4.innerHTML = secondAll;
    secondOutput5.innerHTML = secondAll;
})