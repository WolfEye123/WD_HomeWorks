let myData;
let voteCounter = 0;

function getFile(fileName) {
    let request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend = function () {
        parse(request.responseText);
    };
    request.send();
}

getFile('../json/votingValues.json'); //путь к файлу
function parse(obj) {
    myData = JSON.parse(obj);

    for (let i = 0; i < 10; i++) {
        voteCounter += 0;
    }
    const div = $('#counter');
    div.innerHTML = voteCounter;
}


google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Task', 'Houses'],
        ['Arryn', myData.Arryn],
        ['Baratheon', myData.Baratheon],
        ['Greyjoy', myData.Greyjoy],
        ['Lannister', myData.Lannister],
        ['Martell', myData.Martell],
        ['Stark', myData.Stark],
        ['Targaryen', myData.Targaryen],
        ['Tully', myData.Tully],
        ['Tyrell', myData.Tyrell]
    ]);

    let options = {
        title: 'Houses of Westeros',
        backgroundColor: 'none',
        is3D: true,
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}