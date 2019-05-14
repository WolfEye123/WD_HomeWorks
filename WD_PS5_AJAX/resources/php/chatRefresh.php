<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	return;
}

//variables
$filePath = "../json/messages.json";
$oneHour = 3600;
date_default_timezone_set('Europe/Athens');
$currentDate = strtotime(date('Y-m-d H:i:s' ));

$buffer = file_get_contents($filePath);
if (!$buffer) {
	echo "false";
}

$data = json_decode($buffer, true);
$complex = ["messages" => []];

for ($i = 0; $i < count($data['messages']); $i++) {
	if (!$data['messages'][$i]['show']){
		continue;
	}
	$oldDate = strtotime(date($data['messages'][$i]['messageDate'] . $data['messages'][$i]['messageTime']));
	if ($currentDate - $oldDate > $oneHour) {
		$data['messages'][$i]['show'] = false;
		continue;
	}
	$complex['messages'][] = $data['messages'][$i];
}

file_put_contents($filePath, json_encode($data), JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo json_encode($complex);
