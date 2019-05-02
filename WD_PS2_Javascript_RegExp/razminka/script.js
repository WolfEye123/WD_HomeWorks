/**
 * this method calculates the sum of the numbers in the interval
 * between the user entered (for example, from -100 to 100), adding only numbers ending in 2.3 and 7
 */
function calculateNumbers() {
    const fInput = document.getElementById('fNum');
    const sInput = document.getElementById('sNum');
    const answer = document.getElementById('answerEx1');
    let fNum = fInput.value;
    let sNum = sInput.value;
    let sum = 0;
    let counter;

    if (fNum > sNum) {
        let tmp = sNum;
        sNum = fNum;
        fNum = tmp;
    }
    counter = fNum;
    let remainder = Math.abs(counter) % 10;
    while (counter <= sNum) {
        if (remainder === 2 || remainder === 3 || remainder === 7) {
            sum += counter;
        }
        counter++;
    }
    answer.innerText = `Answer is:  ${sum}`;

}

/**
 * This method calculates the time from the number of seconds entered by the user.
 */
function calculateFromSeconds() {
    const input = document.getElementById('timeInput1');
    const answer = document.getElementById('answerEx2');
    let secondsNum = input.value;
    const timeVariable = 60;
    if (secondsNum < 0) {
        answer.innerText = 'Incorrect number. Please try again.';
        return;
    }
    const minuteNum = Math.floor((secondsNum - (secondsNum % timeVariable)) / timeVariable % timeVariable) + '';
    const hourNum = Math.floor(secondsNum / timeVariable / timeVariable) + '';
    secondsNum = secondsNum % timeVariable + '';
    answer.innerText = 'Answer is:  ' +
        (hourNum.length === 1 ? '0' + hourNum : hourNum) + ':' +
        (minuteNum.length === 1 ? '0' + minuteNum : minuteNum) + ':' +
        (secondsNum.length === 1 ? '0' + secondsNum : secondsNum);
}

/**
 * This method calculates the number of seconds from the time entered by the user.
 */
function calculateToSeconds() {
    const time = document.getElementById('timeInput2').value;
    const answer = document.getElementById('answerEx2_1');
    const fTimeVariable = 3600;
    const sTimeVariable = 60;
    let sec = time.split(':', 3);
    if (sec[0] < 0 || sec[1] < 0 || sec[2] < 0) {
        answer.innerText = 'Incorrect time. Please try again.';
        return;
    }
    let seconds = sec[0] * fTimeVariable;
    seconds += sec[1] * sTimeVariable;
    seconds += +sec[2];
    answer.innerText = `Answer is: ${seconds} sec`;
}

/**
 * this method count the time between dates and display a message to the user
 */
function calculateTimeBetween() {
    const fTime = document.getElementById('timeInput3').value;
    const sTime = document.getElementById('timeInput4').value;
    const answer = document.getElementById('answerEx3');
    let fDate = new Date(fTime);
    let sDate = new Date(sTime);
    if (fDate > sDate) {
        let tmp = sDate;
        sDate = fDate;
        fDate = tmp;
    }
    answer.innerText =
        (sDate.getFullYear() - fDate.getFullYear()) + ' year (s), ' +
        (sDate.getMonth() - fDate.getMonth()) + ' month (s), ' +
        (sDate.getDay() - fDate.getDay()) + ' day (s), ' +
        (sDate.getHours() - fDate.getHours()) + ' hour (s), ' +
        (sDate.getMinutes() - fDate.getMinutes()) + ' minute (s).';
}

/**
 * this method draws a chessboard depending on the size entered by the user
 */
function drawChessBoard() {
    let boardSize = document.getElementById('chess').value;
    const answer = document.getElementById('answerEx4_1');
    const answerErr = document.getElementById('answerEx4');
    answer.innerText = '';
    boardSize = boardSize.split('x', 2);
    const x = boardSize[0];
    const y = boardSize[1];
    if (x < 0 || y < 0 || x > 25 || y > 25) {
        answerErr.innerText = 'Incorrect size. Please try again.';
        return;
    }
    answer.style.width = x * 50 + 'px'; // size in "px"
    answer.style.height = y * 50 + 'px'; // size in "px"
    let flag = true;
    for (let i = 0; i < y; i++) {
        const br = document.createElement("br");
        for (let j = 0; j < x; j++) {
            const block = document.createElement("div");
            block.className = flag ? 'black' : 'white';
            answer.appendChild(block);
            flag = !flag;
            if (j === x - 1 && x % 2 !== 0) {
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
    const regex = [
        /(ps?:\/\/)?[aA-zZ0-9]+\.[aA-zZ]+(\.[aA-zZ]+)?(\.[aA-zZ]+)?/,
        /\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/
    ];
    links.sort();
    links = links.map(function (link) {
        const br = document.createElement('br');
        if (link.match(regex[0])) {
            const a = document.createElement('a');
            let subStringIndex = link.indexOf('://');
            if (subStringIndex < 0) {
                link = '//' + link;
            }
            const linkText = document.createTextNode(link.substring(subStringIndex + 3));
            a.appendChild(linkText);
            a.target = "_blank";
            a.title = link.substring(subStringIndex + 3);
            a.href = link;
            div.appendChild(a);
            div.appendChild(br);
        }
        if (link.match(regex[1])) {
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
function regex() {
    let regex = document.getElementById("regex").value;
    let text = document.getElementById("regExpText").value;
    regex = new RegExp(regex, "gi");

    const answer = document.getElementById("answerEx6");
    answer.innerText = "";

    if (!regex || !text) {
        answer.innerText = "Try again";
    } else {
        text = text.replace(regex, "<mark>$&</mark>");
        answer.innerHTML = text;
    }
}
