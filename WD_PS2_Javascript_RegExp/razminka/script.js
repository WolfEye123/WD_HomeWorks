/**
 * this method calculates the sum of the numbers in the interval
 * between the user entered (for example, from -100 to 100), adding only numbers ending in 2.3 and 7
 */
function calculateNumbers() {
    let fNum = +document.getElementById("fNum").value;
    let sNum = +document.getElementById("sNum").value;
    const answer = document.getElementById("answerEx1");
    let sum = 0, counter = 0;
    if (fNum >= -100 && fNum <= 100 && sNum >= -100 && sNum <= 100 && Number.isInteger(fNum) && Number.isInteger(sNum)) {
        if (fNum > sNum) {
            let tmp = sNum;
            sNum = fNum;
            fNum = tmp;
        }
        counter = fNum;
        while (counter <= sNum) {
            if (counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 7) {
                sum += counter;
            }
            counter++;
        }
        answer.innerText = "Answer is:  " + sum;
    } else {
        answer.innerText = "Incorrect number. Please try again.";
    }
}

/**
 * This method calculates the time from the number of seconds entered by the user.
 */
function calculateFromSeconds() {
    let sNum = +document.getElementById("timeInput1").value;
    const answer = document.getElementById("answerEx2");
    if (sNum < 0 && !Number.isInteger(sNum)) {
        answer.innerText = "Incorrect number. Please try again.";
        return;
    }
    let mNum = Math.floor((sNum - (sNum % 60)) / 60 % 60) + "";
    let hNum = Math.floor(sNum / 60 / 60) + "";
    sNum = sNum % 60 + "";
    answer.innerText = "Answer is:  " +
        (hNum.length === 1 ? "0" + hNum : hNum) + ":" +
        (mNum.length === 1 ? "0" + mNum : mNum) + ":" +
        (sNum.length === 1 ? "0" + sNum : sNum);
}

/**
 * This method calculates the number of seconds from the time entered by the user.
 */
function calculateToSeconds() {
    const time = document.getElementById("timeInput2").value;
    const answer = document.getElementById("answerEx2_1");
    let sec = time.split(':', 3);
    if (sec[0] < 0 || sec[1] < 0 || sec[2] < 0) {
        answer.innerText = "Incorrect time. Please try again.";
        return;
    }
    let seconds = sec[0] * 3600;
    seconds += sec[1] * 60;
    seconds += +sec[2];
    answer.innerText = "Answer is:  " + seconds + " sec";
}

/**
 * this method count the time between dates and display a message to the user
 */
function calculateTimeBetween() {
    const fTime = document.getElementById("timeInput3").value;
    const sTime = document.getElementById("timeInput4").value;
    const answer = document.getElementById("answerEx3");
    let date1 = fTime.split('T', 2);
    let time1 = date1[1].split(':', 2);
    date1 = date1[0].split('-', 3);
    let date2 = sTime.split('T', 2);
    let time2 = date2[1].split(':', 2);
    date2 = date2[0].split('-', 3);
    if ((date2[0] - date1[0]) < 0 ||
        (date2[1] - date1[1]) < 0 ||
        (date2[2] - date1[2]) < 0 ||
        (time2[0] - time1[0]) < 0 ||
        (time2[1] - time1[1]) < 0) {
        answer.innerText = "Incorrect date";
        return;
    }
    answer.innerText =
        (date2[0] - date1[0]) + " year (s), " +
        (date2[1] - date1[1]) + " month (s), " +
        (date2[2] - date1[2]) + " day (s), " +
        (time2[0] - time1[0]) + " hour (s), " +
        (time2[1] - time1[1]) + " minute (s).";
}

/**
 * this method draws a chessboard depending on the size entered by the user
 */
function drawChessBoard() {
    let boardSize = document.getElementById("chess").value;
    const answer = document.getElementById("answerEx4_1");
    const answerErr = document.getElementById("answerEx4");
    answer.innerText = "";
    boardSize = boardSize.split('x', 2);
    let block;
    let br;
    let x = boardSize[0];
    let y = boardSize[1];
    if (x < 0 || y < 0 || x > 25 || y > 25) {
        answerErr.innerText = "Incorrect size. Please try again.";
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
 * sorts out links and ip from the text and gives the user a list
 * @type {HTMLElement}
 */
const link = document.getElementById("link");
link.addEventListener('focus', (e) => {
    const answer = document.getElementById("answerEx5");
    answer.innerText = "";
});

link.addEventListener('blur', (e) => {
    let links = e.target.value.split(",").map(link => link.trim());
    const answer = document.getElementById("answerEx5");
    const div = document.createElement('div');
    const regExp = [
        /(https?:\/\/)?[aA-zZ0-9]+\.[aA-zZ]+(\.[aA-zZ]+)?(\.[aA-zZ]+)?/,
        /\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/
    ];
    links = links.map(function (link) {
        if (link.match(regExp[0])) {
            const subStringIndex = link.indexOf('//');
            if (link.indexOf('http') >= 0) {
                link = link.substring(subStringIndex + 2);
            }
        }
        return link;
    });
    links.sort();
    links = links.map(function (link) {
        const br = document.createElement('br');
        if (link.match(regExp[0])) {
            link = "//" + link;
            const a = document.createElement('a');
            const linkText = document.createTextNode(link.substring(2));
            a.appendChild(linkText);
            a.target = "_blank";
            a.title = link.substring(2);
            a.href = link;
            div.appendChild(a);
            div.appendChild(br);
        }
        if (link.match(regExp[1])) {
            const a = document.createElement('a');
            const linkText = document.createTextNode(link);
            a.appendChild(linkText);
            a.target = "_blank";
            a.title = link;
            a.href = link;
            div.appendChild(a);
            div.appendChild(br);
        }
        return link;
    });
    answer.appendChild(div);
});

/**
 * this method processes the regular expressions entered by the user
 * and the text then highlights the matches in the text.
 */
function regExp() {
    let regExp = document.getElementById("regExp").value;
    let text = document.getElementById("regExpText").value;
    regExp = new RegExp(regExp, "gi");

    const answer = document.getElementById("answerEx6");
    answer.innerText = "";

    if (regExp.length === 0 || text.length === 0) {
        answer.innerText = "Try again";
    } else {
        text = text.replace(regExp, "<mark>$&</mark>");
        answer.innerHTML = text;
    }
}
