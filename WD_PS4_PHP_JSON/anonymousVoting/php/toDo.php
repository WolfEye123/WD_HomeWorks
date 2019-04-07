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

    $filename = "../json/votingValues.json";
    $buffer = file_get_contents($filename);
    $data = json_decode($buffer, true);

    for ($i = 0; $i < 9; $i++) {
        if (isset($_POST[$houses[$i]]) && $_POST[$houses[$i]] == $houses[$i]) {
            $data[$houses[$i]]++;
            break;
        }
    }

    echo '<pre>';
    print_r($data);
    echo '</pre>';
    file_put_contents($filename, json_encode($data));
    header("Location: chart.php");
}