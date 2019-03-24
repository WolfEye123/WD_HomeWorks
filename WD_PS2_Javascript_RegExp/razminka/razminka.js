function calculateNumbers() {
    const fNum = +document.getElementById("fNum").value;
    const sNum = +document.getElementById("sNum").value;
    const answer = document.getElementsByClassName("answerEx1")[0];
    let sum = 0, counter = 0;
    if (fNum >= -100 && fNum <= 100 && sNum >= -100 && sNum <= 100) {
        counter = fNum;
        while (counter <= sNum) {
            if (counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 7) {
                sum += counter;
            }
            counter++;
        }
        answer.innerHTML = "Answer is:  " + sum.toString();
    } else {
        answer.innerHTML = "Incorrect number. Please try again.";
    }
}

function calculateFromSeconds() {
    let sNum = +document.getElementById("timeInput1").value;
    const answer = document.getElementsByClassName("answerEx2")[0];
    let mNum = Math.floor((sNum - (sNum % 60)) / 60 % 60);
    let hNum = Math.floor(sNum / 60 / 60);
    sNum = sNum % 60;
    answer.innerHTML = "Answer is:  " + hNum + ":" + mNum + ":" + sNum;
}

function calculateToSeconds() {
    let time = document.getElementById("timeInput2").value;
    const answer = document.getElementsByClassName("answerEx2_1")[0];
    let sec = time.split(':', 3);
    let seconds = sec[0] * 3600;
    seconds += sec[1] * 60;
    seconds += +sec[2];
    answer.innerHTML = "Answer is:  " + seconds + " sec";
}

function calculateTimeBetween() {
    const ftime = document.getElementById("timeInput3").value;
    const stime = document.getElementById("timeInput4").value;
    const answer = document.getElementsByClassName("answerEx3")[0];
    let date1 = ftime.split('T',2);
    let time1 = date1[1].split(':',2);
    date1 = date1[0].split('-',3);
    let date2 = stime.split('T',2);
    let time2 = date2[1].split(':',2);
    date2 = date2[0].split('-',3);
    answer.innerHTML = (date2[0] - date1[0]) + " year (s), " + (date2[1] - date1[1]) + " month (s), " +
        (date2[2] - date1[2]) + " day (s), " +   (time2[0] - time1[0]) + " hour (s), " + (time2[1] - time1[1]) +
        " minute (s).";
}

