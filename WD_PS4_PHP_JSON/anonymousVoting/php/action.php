<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST" && function_exists($_POST["function"])) {
    $_POST["function"]();
}

/**
 * counts the votes and writes them to a file
 */
function action()
{
    $houses = [
        "Arryn_of_the_Eyrie",
        "Baratheon_of_Storms_End",
        "Greyjoy_of_Pyke",
        "Lannister_of_Casterly_Rock",
        "Martell_of_Dorn",
        "Stark_of_Winterfell",
        "Targaryen_of_Kings_Landing",
        "Tully_of_WaterLand",
        "Tyrell_of_Highgarden"
    ];

    $filename = "../json/votingValues.json";
    $buffer = file_get_contents($filename);
    $data = json_decode($buffer, true);

    for ($i = 0; $i < count($houses); $i++) {
        if (isset($_POST[$houses[$i]]) && $_POST[$houses[$i]] === $houses[$i]) {
            $data[$houses[$i]]++;
            $_SESSION['image'] = "../images/housesToSlider/" . $houses[$i] . ".png";
            break;
        }
    }
    file_put_contents($filename, json_encode($data));
    header("Location: chart.php");
}
