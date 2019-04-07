<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GAME OF THRONES</title>
    <link rel="shortcut icon" type="image/png" href="../images/maxresdefault.jpg"/>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
<div class="mainWrap">
    <section class="lBlock">
        <div class="image"
             style="background-image: url(<?= isset($_SESSION['image']) ? $_SESSION['image'] : "../images/maxresdefault.jpg" ?>)">
        </div>
    </section>
    <section class="rBlock">
        <section class="voting">
            <div class="visitors">Visitors: <?= isset($_SESSION['visitors']) ? $_SESSION['visitors'] : 0 ?></div>
            <div class="rBlock_got"><a href="index.php">GAME OF THRONES</a></div>
            <div class="rBlock_label">
                <label>Anonymous petition for<br> the house of Westeros<br>
                    which you think is the strongest</label>
            </div>
            <div id="counter"></div>
            <div id="piechart_3d" class="piechart"></div>
            <div id="log"></div>
        </section>
    </section>
</div>
<script src="../json/votingValues.json"></script>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="../javascript/googleChart.js"></script>
</body>
</html>