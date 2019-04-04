<?php
session_start();

isset($_SESSION["visitors"]) ? $_SESSION["visitors"]++ : $_SESSION["visitors"] = 1;
?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Test page</title>
        <link rel="stylesheet" href="styles/style.css">
    </head>
    <body>
    <section class="wrapper">
        <section>
            <div class="ex">Warm up task № 1</div>
            <div class="exText">
                <label>Calculate the sum of numbers from -1000 to 1000</label>
            </div>
            <form action="toDo.php" method="post" class="form">
                <input type="hidden" name="function" value="task1">
                <input type="text" name="fNum1" class="input" placeholder="Enter first number" required>
                <input type="text" name="sNum1" class="input" placeholder="Enter second number" required>
                <input type="submit" class="submit" value="Calculate">
                <div class="answerEx">
                    <?= isset($_SESSION["task1"]) ? "Answer is: " . $_SESSION["task1"] : "Answer is:" ?>
                </div>
            </form>
        </section>
        <section>
            <div class="ex">Warm up task № 2</div>
            <div class="exText">
                <label>Calculate the sum of numbers from -1000 to 1000,
                    adding only numbers that end with 2,3, and 7
                </label>
            </div>
            <form action="toDo.php" method="post" class="form">
                <input type="hidden" name="function" value="task2">
                <input type="text" name="fNum2" class="input" placeholder="Enter first number" required>
                <input type="text" name="sNum2" class="input" placeholder="Enter second number" required>
                <input type="submit" class="submit" value="Calculate">
                <div class="answerEx">
                    <?= isset($_SESSION["task2"]) ? "Answer is: " . $_SESSION["task2"] : "Answer is:" ?>
                </div>
            </form>
        </section>
        <section>
            <div class="ex">Warm up task № 3</div>
            <div class="exText">
                <label>Make the download files in a separate folder. All files from the folder should be displayed <br>
                    in a list containing only the name and size of the file in a human-readable size <br>
                    (1kB, 3MB, 1.5GB) in brackets. Files can be downloaded. For image files, make a small preview.
                </label>
            </div>
            <form action="toDo.php" method="post" enctype="multipart/form-data" class="form">
                <input type="hidden" name="function" value="task3">
                <input type="file" name="upload" class="input" placeholder="Enter file">
                <input type="submit" class="submit" value="Upload">
                <div class="answerEx">
                    <?= isset($_SESSION["task3"]) ? $_SESSION["task3"] : "" ?>
                </div>
            </form>
        </section>
    </section>
    </body>
    </html>

<?php
unset(
    $_SESSION["task1"],
    $_SESSION["task2"],
    $_SESSION["task3"]
);
?>