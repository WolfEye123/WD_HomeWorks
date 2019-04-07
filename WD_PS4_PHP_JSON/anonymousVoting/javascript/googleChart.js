let myData;
function getFile (fileName) {
    let request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend = function() {
        parse(request.responseText);
    };
    request.send();
}
getFile('../json/votingValues.json'); //путь к файлу
function parse(obj) {
    myData = JSON.parse(obj);
    console.log(myData);
}

google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Task', 'Houses'],
        ['Arryn', myData.Arryn_of_the_Eyrie],
        ['Baratheon', myData.Baratheon_of_Storms_End],
        ['Greyjoy', myData.Greyjoy_of_Pyke],
        ['Lannister', myData.Lannister_of_Casterly_Rock],
        ['Martell', myData.Martell_of_Dorn],
        ['Stark', myData.Stark_of_Winterfell],
        ['Targaryen', myData.Targaryen_of_Kings_Landing],
        ['Tully', myData.Tully_of_WaterLand],
        ['Tyrell', myData.Tyrell_of_Highgarden]
    ]);

    let options = {
        title: 'Houses of Westeros',
        backgroundColor: 'none',
        is3D: true,
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}