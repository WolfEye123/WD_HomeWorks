<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST" && function_exists($_POST["function"])) {
    $_POST["function"]();
}


function task1()
{
    $result1 = 0;
    $fNum = $_POST['fNum1'];
    $sNum = $_POST['sNum1'];

    if (!empty($fNum) && !empty($sNum)) {
        for ($i = $fNum; $i <= $sNum; $i++) {
            $result1 += $i;
        }
    }

    $_SESSION["task1"] = $result1;
    header("Location: index.php");

}

function task2()
{
    $result2 = 0;
    $fNum = $_POST['fNum2'];
    $sNum = $_POST['sNum2'];
    $counter = $fNum;
    while ($counter <= $sNum) {
        if ($counter % 10 == 2 || $counter % 10 == 3 || $counter % 10 == 7) {
            $result2 += $counter;
        }
        $counter++;
    }

    $_SESSION["task2"] = $result2;
    header("Location: index.php");

}

function task3()
{
    $path = 'images/';
    if (!empty($_FILES['upload'])) {
        $path .= basename($_FILES['upload']['name']);
        if (move_uploaded_file($_FILES['upload']['tmp_name'], $path)) {
            $_SESSION["task3"] = "The file " . basename($_FILES['upload']['name']) .
                " has been uploaded" . "<br>";
            task3_readDir();
        } else {
            $_SESSION["task3"] = "There was an error uploading the file \"" .
                basename($_FILES['upload']['name']) . "\" please try again!";
        }
    }
}

function task3_readDir()
{
    $path = 'images/';
    if ($dir = opendir('images/')) {
        $_SESSION['task3_1'] = [];
        $sizeExtension = ["kB", "MB", "GB", "TB"];
        $i = 0;
        while (false !== ($file = readdir($dir))) {
            if (($file != ".") && ($file != "..")) {
                $size = filesize($path . $file);
                $size = task3_countFileSize($size);
                $imagePreview = task3_checkImage($path . $file);
                $_SESSION['task3_1'][$i] = "$imagePreview <a download href='" . $path . $file . "'" . ">" .
                    $file . " ( " . $size[0] . $sizeExtension[$size[1]] . " )</a><br>";
                $i++;
            }
        }
        closedir($dir);
    }
    header("Location: index.php");
}

function task3_checkImage($file)
{
    $a = getimagesize($file);
    $image_type = $a[2];
    if (in_array($image_type, array(IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_BMP))) {
        $preview = "<img src='$file' width='25' height='25'  alt='$file'>";
    } else {
        $preview = "";
    }
    return $preview;
}

function task3_countFileSize($size)
{
    // count to kB
    $size = round($size / 1024.0, 2);
    $counter = 0;
    for ($i = 0; $i < 4; $i++) {
        if ($size > 1024) {
            $size = round($size / 1024.0, 2);
            $counter++;
        } else if ($size < 1) {
            break;
        }
    }
    $size = [$size, $counter];
    return $size;
}

function task4()
{
    $_SESSION['task4'] = "";
    $size = $_POST['chessboard'];
    $size = explode('x', $size, 2);
    $x = +$size[0];
    $y = +$size[1];
    if ($x < 0 || $y < 0 || $x > 25 || $y > 25) {
        $_SESSION['chessBoard_div'][0] = "Incorrect size. Please try again.";
        header("Location: index.php");
        return;
    } else {
        $_SESSION['task4'] = "";
    }
    $flag = true;
    $_SESSION['chessBoard_div'][0] = '<div style="width:' . ($x * 50) . '; height:' . ($y * 50) . '">';
    $counter = 1;
    for ($i = 0; $i < $y; $i++) {
        for ($j = 0; $j < $x; $j++) {
            if ($flag) {
                $div = '<div class="block black"></div>';
            } else {
                $div = '<div class="block white"></div>';
            }
            $_SESSION['chessBoard_div'][$counter++] = $div;
            $flag = !$flag;
            if ($j == $x - 1 && $x % 2 != 0) {
                $flag = !$flag;
            }
        }
        $flag = !$flag;
        $_SESSION['chessBoard_div'][$counter++] = '<br>';
    }
    $_SESSION['chessBoard_div'][$counter] = '</div>';

    header("Location: index.php");
}

function task5()
{
    $result = 0;
    $numbers = $_POST['number'];
    $numbers = str_split($numbers);
    foreach ($numbers as $number) {
        $result += $number;
    }
    $_SESSION['task5'] = $result;
    header("Location: index.php");
}

function task6()
{
    $result = [];
    for ($i = 0; $i < 100; $i++) {
        $result[$i] = rand(1, 10);
    }
    $result = array_unique($result);
    arsort($result);
    $i = 0;
    $result1 = [];
    foreach ($result as $number) {
        if ($number != null) {
            $result1[$i++] = $number * 2;
        }
    }
    arsort($result1);
    foreach ($result1 as $number) {
        $result .= " '$number'";
    }
    $_SESSION['task6'] = $result;
    header("Location: index.php");
}

function task8()
{
    $text = $_POST['textarea'];
    $regExp = '/[\/\(\)\-\§\#\!\$\*\%\+\&\:\;\<\=\>\?\@\_\{\|\}\~\№\«\»\€]/i';
    $_SESSION['task8'] = [];
    $_SESSION['task8'][0] = count(explode("\n", $text));
    echo $_SESSION['task8'][0];
    echo '<br>';
    $_SESSION['task8'][1] = count(explode(" ", $text)) - 1;
    echo $_SESSION['task8'][1];
    echo '<br>';
    preg_match_all($regExp, $text, $matches, PREG_OFFSET_CAPTURE);
    $_SESSION['task8'][2] = count($matches[0]);
    echo $_SESSION['task8'][2];
    echo '<br>';
    $_SESSION['task8'][3] = strlen($text) - $_SESSION['task8'][2] - $_SESSION['task8'][1];
    echo $_SESSION['task8'][3];
    echo '<br>';
    header("Location: index.php");
}
