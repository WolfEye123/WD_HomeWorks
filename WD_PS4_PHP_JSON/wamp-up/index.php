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
                <input type="hidden" name="function" value="task4">
                <input type="text" name="chessboard" class="input" placeholder="Enter chessboard size" required>
                <input type="submit" class="submit" value="Draw ChessBoard">
                <div id="answerEx4_1" class="answerEx4">
                    <?php if (isset($_SESSION['task4']) && $_SESSION['task4'] == "") {
                        $length = count($_SESSION['chessBoard_div']);
                        for ($i = 0; $i < $length; $i++) {
                            echo $_SESSION['chessBoard_div'][$i];
                        };
                    } ?>
                </div>
                <div class="answerEx"></div>
            </form>
        </section>
        <section>
            <div class="ex">Warm up task № 5</div>
            <div class="exText">
                <label>Find the sum of digits of the entered number ( example: 123 = 6 )</label>
            </div>
            <form action="toDo.php" method="post" class="form">
                <input type="hidden" name="function" value="task5">
                <input type="text" name="number" class="input" placeholder="Enter number" required>
                <input type="submit" class="submit" value="Calculate">
                <div class="answerEx">
                    <?= isset($_SESSION['task5']) ? "Answer is: " . $_SESSION['task5'] : "Answer is:" ?>
                </div>
            </form>
        </section>
        <section>
            <div class="ex">Warm up task № 6</div>
            <div class="exText">
                <label>Generate an array of random integers from 1 to 10, the length of the array is 100.<br>
                    Remove duplicates from the array, sort, revert and multiply each element by two</label>
            </div>
            <form action="toDo.php" method="post" class="form">
                <input type="hidden" name="function" value="task6">
                <input type="submit" class="submit" value="Calculate">
                <div class="answerEx">
                    <?= isset($_SESSION['task6']) ? "Answer is: " . $_SESSION['task6'] : "Answer is:" ?>
                </div>
            </form>
        </section>
        <section class="visitors">
            <div class="ex">Warm up task № 7</div>
            <div class="exText">
                <label>
                    The page should have a counter for counting page visits through php sessions.
                </label>
            </div>
            <div class="answerEx">
                <label>Visitors: <?= isset($_SESSION['visitors']) ? $_SESSION['visitors'] : 0 ?></label>
            </div>
        </section>
        <section>
            <div class="ex">Warm up task № 8</div>
            <div class="exText">
                <label>Count the number of lines, letters and spaces in the entered text. <br>
                    Consider Cyrillic, emoji and special characters</label>
            </div>
            <form action="toDo.php" method="post" class="form">
                <input type="hidden" name="function" value="task8">
                <label>
                    <textarea name="textarea" class="textarea" placeholder=" Enter text" required></textarea>
                </label>
                <input type="submit" class="submit" value="Calculate">
                <div class="answerEx">
                    <?php if (isset($_SESSION['task8'])){
                        echo "Number of lines: " . $_SESSION['task8'][0] . '<br>';
                        echo "Number of spaces: " . $_SESSION['task8'][1] . '<br>';
                        echo "Number of special characters: " . $_SESSION['task8'][2] . '<br>';
                        echo "Number of characters: " . $_SESSION['task8'][3] . '<br>';
                    } ?>
                </div>
            </form>
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
    $_SESSION['task4'],
    $_SESSION['chessBoard_div'],
    $_SESSION['task5'],
    $_SESSION['task6'],
    $_SESSION['task8'],
);
?>