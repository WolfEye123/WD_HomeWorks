<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	return;
}
$filePath = "../json/messages.json";
$currentDate = getdate();
$buffer = file_get_contents($filePath);
if (!$buffer) {
	echo "false";
}
$data = json_decode($buffer, true);
$complex = [];
for ($i = 0; $i < count($data); $i++){
	try {
		$oldDate = new DateTime($data['messages'][$i]['messageDate'] . 'T' . $data['messages'][$i]['messageTime']);
	} catch (Exception $e) {
	}
	if ($currentDate - $oldDate > 1) {
		$data[$i]['show'] = false;
		continue;
	}
	$complex[] = $data[$i];
}
file_put_contents($filePath, json_encode($data), JSON_PRETTY_PRINT);
echo json_encode($complex);
header('Content-type: application/json');
