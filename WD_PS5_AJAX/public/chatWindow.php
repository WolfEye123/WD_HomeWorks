<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Easy Chat</title>
	<link rel="stylesheet" href="styles/style.css">
</head>
<body>
<section class="chat">
	<section class="chat_colorLines" id="chat_colorLines">
		<div class="chat_colorLines_lines line0"></div>
		<div class="chat_colorLines_lines line1"></div>
		<div class="chat_colorLines_lines line2"></div>
		<div class="chat_colorLines_lines line3"></div>
		<div class="chat_colorLines_lines line4"></div>
		<div class="chat_colorLines_lines line0"></div>
		<div class="chat_colorLines_lines line1"></div>
		<div class="chat_colorLines_lines line2"></div>
		<div class="chat_colorLines_lines line3"></div>
		<div class="chat_colorLines_lines line4"></div>
	</section>
	<form class="chat_scope">
		<div class="chat_name">Easy Chat</div>
		<div class="chat_window"></div>
		<section class="chat_massage_submit">
			<textarea name="massage"
								id="massage"
								cols="10"
								rows="1"
								placeholder="Enter your massage"
								required></textarea>
			<input type="submit" class="chat_sendSubmit"  value="Send">
		</section>
	</form>
</section>
</body>
</html>
