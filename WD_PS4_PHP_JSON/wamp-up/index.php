<?php
session_start();
isset($_SESSION['visitors']) ? $_SESSION['visitors']++ : $_SESSION['visitors'] = 1;

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
                    <?= isset($_SESSION['task1']) ? "Answer is: " . $_SESSION['task1'] : "Answer is:" ?>
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
                    <?= isset($_SESSION['task2']) ? "Answer is: " . $_SESSION['task2'] : "Answer is:" ?>
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
                <input type="file" name="upload" class="input" placeholder="Enter file" required>
                <input type="submit" class="submit" value="Upload">
                <div class="answerEx">
                    <label class="download">
                        <?php if (isset($_SESSION['task3'])) {
                            $length = count($_SESSION['task3_1']);
                            for ($i = 0; $i < $length; $i++) {
                                echo $_SESSION['task3_1'][$i];
                            };
                        } ?>

                    </label>
                </div>
            </form>
        </section>
        <section>
            <div class="ex">Warm up task № 4</div>
            <div class="exText">
                <label>ChessBoard<br>Max size(25x25)</label>
            </div>
            <form action="toDo.php" method="post" class="form">
                <input type="hidden" name="function" value="drawChessBoard">
                <input type="text" name="chessboard" class="input" placeholder="Enter chessboard size" required>
                <input type="submit" class="submit" value="Draw ChessBoard">
                <div id="answerEx4_1" class="answerEx4">
                    <?php if (isset($_SESSION['chessBoard']) && $_SESSION['chessBoard'] == "") {
                        $length = count($_SESSION['chessBoard_div']);
                        for ($i = 0; $i < $length; $i++) {
                            echo $_SESSION['chessBoard_div'][$i];
                        };
                    } ?>
                </div>
                <div class="answerEx"></div>
            </form>
        </section>
        <section class="visitors">
            <div class="ex">Warm up task № 7</div>
            <div class="exText">
                <label>
                    The page should have a counter for counting page visits through pkhp sessions.
                </label>
            </div>
            <div class="answerEx">
                <label>Visitors: <?= isset($_SESSION['visitors']) ? $_SESSION['visitors'] : 0 ?></label>
            </div>
        </section>
    </section>
    </body>
    </html>

<?php
unset(
    $_SESSION['task1'],
    $_SESSION['task2'],
    $_SESSION['task3'],
    $_SESSION['task3_1'],
    $_SESSION['chessBoard'],
    $_SESSION['chessBoard_div']
);
?>