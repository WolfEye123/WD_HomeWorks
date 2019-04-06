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
            task3_1();
        } else {
            $_SESSION["task3"] = "There was an error uploading the file \"" .
                basename($_FILES['upload']['name']) . "\" please try again!";
        }
    }
}

function task3_1()
{
    $path = 'images/';
    if ($dir = opendir('images/')) {
        $_SESSION['task3_1'] = [];
        $sizeExtension = ["kB", "MB", "GB", "TB"];
        $i = 0;
        while (false !== ($file = readdir($dir))) {
            if (($file != ".") && ($file != "..")) {
                $size = filesize($path . $file);
                $size = countSize($size);
                $preview = checkImage($path . $file);
                $_SESSION['task3_1'][$i] = "$preview <a download href='" . $path . $file . "'" . ">" .
                    $file . " ( " . $size[0] . $sizeExtension[$size[1]] . " )</a><br>";
                $i++;
            }
        }
        closedir($dir);
    }
    header("Location: index.php");
}

function checkImage($file)
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

function countSize($size)
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