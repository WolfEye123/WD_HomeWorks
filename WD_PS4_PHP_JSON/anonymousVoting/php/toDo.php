<?php

if ($_SERVER["REQUEST_METHOD"] === "POST" && function_exists($_POST["function"])) {
    $_POST["function"]();
}


function action()
{
    $houses = [
        "Arryn",
        "Baratheon",
        "Greyjoy",
        "Lannister",
        "Martell",
        "Stark",
        "Targaryen",
        "Tully",
        "Tyrell"
    ];

    $checked = "";

    for ($i = 0; $i < 9; $i++) {
        if (isset($_POST[$houses[$i]]) && $_POST[$houses[$i]] == $houses[$i]) {
            $checked = $_POST[$houses[$i]];
        }
    }

    echo $checked;

//    header("Location: index.php");

}