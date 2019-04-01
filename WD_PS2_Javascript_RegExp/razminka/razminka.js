/**
 * this method calculates the sum of the numbers in the interval
 * between the user entered (for example, from -100 to 100), adding only numbers ending in 2.3 and 7
 */
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

/**
 * This method calculates the time from the number of seconds entered by the user.
 */
function calculateFromSeconds() {
    let sNum = +document.getElementById("timeInput1").value;
    const answer = document.getElementsByClassName("answerEx2")[0];
    if (sNum < 0) {
        answer.innerHTML = "Incorrect number. Please try again.";
        return;
    }
    let mNum = Math.floor((sNum - (sNum % 60)) / 60 % 60);
    let hNum = Math.floor(sNum / 60 / 60);
    sNum = sNum % 60;
    answer.innerHTML = "Answer is:  " + hNum + ":" + mNum + ":" + sNum;
}

/**
 * This method calculates the number of seconds from the time entered by the user.
 */
function calculateToSeconds() {
    let time = document.getElementById("timeInput2").value;
    const answer = document.getElementsByClassName("answerEx2_1")[0];
    let sec = time.split(':', 3);
    if (sec[0] < 0 || sec[1] < 0 || sec[2] < 0) {
        answer.innerHTML = "Incorrect time. Please try again.";
        return;
    }
    let seconds = sec[0] * 3600;
    seconds += sec[1] * 60;
    seconds += +sec[2];
    answer.innerHTML = "Answer is:  " + seconds + " sec";
}

/**
 * this method count the time between dates and display a message to the user
 */
function calculateTimeBetween() {
    const ftime = document.getElementById("timeInput3").value;
    const stime = document.getElementById("timeInput4").value;
    const answer = document.getElementsByClassName("answerEx3")[0];
    let date1 = ftime.split('T', 2);
    let time1 = date1[1].split(':', 2);
    date1 = date1[0].split('-', 3);
    let date2 = stime.split('T', 2);
    let time2 = date2[1].split(':', 2);
    date2 = date2[0].split('-', 3);
    answer.innerHTML = (date2[0] - date1[0]) + " year (s), " + (date2[1] - date1[1]) + " month (s), " +
        (date2[2] - date1[2]) + " day (s), " + (time2[0] - time1[0]) + " hour (s), " + (time2[1] - time1[1]) +
        " minute (s).";
}

/**
 * this method draws a chessboard depending on the size entered by the user
 */
function drawChessBoard() {
    let boardSize = document.getElementById("chess").value;
    const answer = document.getElementsByClassName("answerEx4_1")[0];
    const answerErr = document.getElementsByClassName("answerEx4")[0];
    answer.innerHTML = "";
    boardSize = boardSize.split('x', 2);
    let block;
    let br;
    let x = boardSize[0];
    let y = boardSize[1];
    if (x < 0 || y < 0 || x > 25 || y > 25) {
        answerErr.innerHTML = "Incorrect size. Please try again.";
        return;
    }
    answer.style.width = x * 50; // size in "px"
    answer.style.height = y * 50; // size in "px"
    let flag = true;
    for (let i = 0; i < y; i++) {
        br = document.createElement("br");
        for (let j = 0; j < x; j++) {
            block = document.createElement("div");
            if (flag) {
                block.className = 'block black';
            } else {
                block.className = 'block white';
            }
            answer.appendChild(block);
            flag = !flag;
            if (j == x - 1 && x % 2 != 0) {
                flag = !flag;
            }
        }
        flag = !flag;
        answer.append(br);
    }
}

/**
 * this method processes the regular expressions entered by the user
 * and the text then highlights the matches in the text.
 * @type {HTMLElement}
 */
const link = document.getElementById("link");
link.addEventListener('focus', (e) => {
    const answer = document.getElementsByClassName("answerEx5")[0];
    answer.innerHTML = "";
});

link.addEventListener('blur', (e) => {
    let links = e.target.value.split(',');
    links = links.map(function (link) {
        link = link.replace(/\s/g, "");
        return link;
    });
    links = links.map(function (link) {
        if (link.charAt(4) === 's') {
            link = link.substring(0, 4) + link.substring(5);
        }
        return link;
    });
    links.sort();
    let br;
    const answer = document.getElementsByClassName("answerEx5")[0];
    let regExp = [/https\:\/\/\w+\.\w+\.\w+/, /https\:\/\/\w+\.\w+/, /http\:\/\/\w+\.\w+\.\w+/, /http\:\/\/\w+\.\w+/,
        /\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/];
    links = links.map(function (link) {
        br = document.createElement('br');
        if (link.match(regExp[0]) || link.match(regExp[1])) {
            let a = document.createElement('a');
            let linkText = document.createTextNode(link.substring(8));
            a.appendChild(linkText);
            a.target = "_blank";
            a.title = link.substring(8);
            a.href = link;
            answer.appendChild(a);
            answer.appendChild(br);
        }
        if (link.match(regExp[2]) || link.match(regExp[3])) {
            let a = document.createElement('a');
            let linkText = document.createTextNode(link.substring(7));
            a.appendChild(linkText);
            a.target = "_blank";
            a.title = link.substring(7);
            a.href = link;
            answer.appendChild(a);
            answer.appendChild(br);
        }
        if (link.match(regExp[4])) {
            let a = document.createElement('a');
            let linkText = document.createTextNode(link);
            a.appendChild(linkText);
            a.target = "_blank";
            a.title = link;
            a.href = link;
            answer.appendChild(a);
            answer.appendChild(br);
        }
        return link;
    });
});

/**
 *
 * @type {HTMLElement}
 */
const text = document.getElementById("regExpText");
text.addEventListener('focus', (e) => {
    const answer = document.getElementsByClassName("answerEx6")[0];
    answer.innerHTML = "";
});

/**
 *
 */
text.addEventListener('blur', (e) => {
    let regExp = document.getElementById("regExp").value;
    if (regExp.charAt(regExp.length - 1) === 'g' || regExp.charAt(regExp.length - 1) === 'i'
        || regExp.charAt(regExp.length - 1) === 'm') {
        regExp = new RegExp(regExp.substring(0, regExp.length - 1), regExp.charAt(regExp.length - 1));
    } else {
        regExp = new RegExp(regExp);
    }
    let text = e.target.value;
    let temp, mark, foundPos;
    const answer = document.getElementsByClassName("answerEx6")[0];

    if (regExp.length === 0) {
        answer.innerHTML = "No regex";
        return;
    } else {
        let regExpText;
        while (text.length > 0) {
            foundPos = text.search(regExp);
            mark = document.createElement("mark");
            if (foundPos < 0) {
                answer.append(text);
                return;
            } else if (foundPos === 0) {
                regExpText = text.match(regExp)[0];
                mark.append(regExpText);
                temp = text.substring(0, regExpText.length);
                text = text.substring(regExpText.length);
                answer.appendChild(mark);
                continue;
            } else {
                regExpText = text.match(regExp)[0];
                temp = text.substring(0, foundPos);
                text = text.substring(foundPos);
                answer.append(temp);
                temp = text.substring(0, regExpText.length);
                mark.append(temp);
                text = text.substring(regExpText.length);
                answer.appendChild(mark);
            }
        }
    }
});