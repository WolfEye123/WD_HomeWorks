<?php
session_start();
require_once "toDo.php";
isset($_SESSION['visitors']) ? $_SESSION['visitors']++ : $_SESSION['visitors'] = 1;

?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>GAME OF THRONES</title>
        <link rel="shortcut icon" type="image/png" href="../images/maxresdefault.jpg"/>
        <link rel="stylesheet" href="../styles/style.css">
    </head>
    <body>
    <div class="mainWrap">
        <section id="lBlock" class="lBlock"><?= isset($_SESSION['visitors']) ? $_SESSION['visitors'] : 0 ?></section>
        <section class="rBlock">
            <section class="voting">
                <div class="rBlock_got">GAME OF THRONES</div>
                <div class="rBlock_label">
                    <label>Anonymous petition for<br> the house of Westeros<br>
                        which you think is the strongest</label>
                </div>
                <div class="form">
                    <form action="toDo.php" method="post">
                        <input type="hidden" name="function" value="action">
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb0" value="Arryn" name="Arryn" onclick='this.form.submit()'">
                            <label for="rBlock_cb0" class="checkboxLabel">Arryn_of_the_Eyrie</label>
                            <img src="../images/housesToSelect/Arryn_of_the_Eyrie.png" alt="Arryn_of_the_Eyrie">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox"  id="rBlock_cb1" value="Baratheon" name="Baratheon" onclick='this.form.submit()'>
                            <label for="rBlock_cb1" class="checkboxLabel">Baratheon_of_Storms_End</label>
                            <img src="../images/housesToSelect/Baratheon_of_Storms_End.png" alt="Baratheon_of_Storms_End">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb2" value="Greyjoy" name="Greyjoy" onclick='this.form.submit()'>
                            <label for="rBlock_cb2" class="checkboxLabel">Greyjoy_of_Pyke</label>
                            <img src="../images/housesToSelect/Greyjoy_of_Pyke.png" alt="Greyjoy_of_Pyke">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb3" value="Lannister" name="Lannister" onclick='this.form.submit()'>
                            <label for="rBlock_cb3" class="checkboxLabel">Lannister_of_Casterly_Rock</label>
                            <img src="../images/housesToSelect/Lannister_of_Casterly_Rock.png" alt="Lannister_of_Casterly_Rock">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb4" value="Martell" name="Martell" onclick='this.form.submit()'>
                            <label for="rBlock_cb4" class="checkboxLabel">Martell_of_Dorn</label>
                            <img src="../images/housesToSelect/Martell_of_Dorn.png" alt="Martell_of_Dorn">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb5" value="Stark" name="Stark" onclick='this.form.submit()'>
                            <label for="rBlock_cb5" class="checkboxLabel">Stark_of_Winterfell</label>
                            <img src="../images/housesToSelect/Stark_of_Winterfell.png" alt="Stark_of_Winterfell">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb6" value="Targaryen" name="Targaryen" onclick='this.form.submit()'>
                            <label for="rBlock_cb6" class="checkboxLabel">Targaryen_of_Kings_Landing</label>
                            <img src="../images/housesToSelect/Targaryen_of_Kings_Landing.png" alt="Targaryen_of_Kings_Landing">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb7" value="Tully" name="Tully" onclick='this.form.submit()'>
                            <label for="rBlock_cb7" class="checkboxLabel">Tully_of_WaterLand</label>
                            <img src="../images/housesToSelect/Tully_of_WaterLand.png" alt="Tully_of_WaterLand">
                        </div>
                        <div class="rBlock_cb">
                            <input type="checkbox" id="rBlock_cb8" value="Tyrell" name="Tyrell" onclick='this.form.submit()'>
                            <label for="rBlock_cb8" class="checkboxLabel">Tyrell_of_Highgarden</label>
                            <img src="../images/housesToSelect/Tyrell_of_Highgarden.png" alt="Tyrell_of_Highgarden">
                        </div>
                    </form>
                </div>
            </section>
        </section>
        <script src="../javascript/jQuery.js"></script>
        <script src="../javascript/script.js"></script>
    </body>
    </html>
<?php
unset(
    $_SESSION['task1'],
);
?>