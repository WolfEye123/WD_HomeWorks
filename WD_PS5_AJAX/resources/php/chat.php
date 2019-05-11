<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	if ($_POST["post"] === "1") {
		chatPage();
	}
}

/**
 *
 */
function chatPage()
{
	// variables
	$messageDate = $_POST["messageDate"];
	$messageTime = $_POST["messageTime"];
	$userName = $_POST["messageFrom"];
	$message = $_POST["message"];
	$filePath = "../json/$userName.json";

	// json object
	$complex = array(
		"messageDate" => $messageDate,
		"messageTime" => $messageTime,
		"messageFrom" => $userName,
		"message" => $message
	);

	if ($dir = opendir("../json")) {
		$found = false;
		while ($file = readdir($dir)) {
			if ($file === $userName . ".json") {
				$found = true;
				break;
			}
		}
		if (!$found) {
			return;
		}
		$buffer = file_get_contents($filePath);
		$data = json_decode($buffer, true);
		array_push($data["messages"], $complex);
		print_r($complex);
		file_put_contents($filePath, json_encode($data), JSON_PRETTY_PRINT);
	}
}
