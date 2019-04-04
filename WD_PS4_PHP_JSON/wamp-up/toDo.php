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
}

function task3(){
    if(!empty($_FILES['upload']))
    {
        $path = "images/";
        $path = $path . basename($_FILES['upload']['name']);
        if(move_uploaded_file($_FILES['upload']['tmp_name'], $path)) {
            $_SESSION["task3"] = "The file ".  basename( $_FILES['upload']['name']).
                " has been uploaded";
        } else{
            $_SESSION["task3"] = "There was an error uploading the file \"" .
                basename( $_FILES['upload']['name']) . "\" please try again!";
        }
    }
}