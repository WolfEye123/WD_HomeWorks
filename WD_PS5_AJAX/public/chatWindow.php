<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?= isset($_SESSION["user"]) ? $_SESSION["user"] : "Easy Chat" ?></title>
	<link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous">
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
	<section class="chat_scope">
        <div class="chat_name">Easy Chat</div>
        <div class="chat_window" id="chat_window"></div>
        <form class="chat_massage_submit">
            <textarea name="message"
                      id="message"
                      cols="10"
                      rows="1"
                      placeholder="Enter your message"
                      required></textarea>
			<input type="submit"
                   id="sendMessage"
                   class="chat_sendSubmit"
                   value="Send">
		</form>
	</section>
</section>
<script>
  MESSAGES = <?= isset($_SESSION["messages"]) ? json_encode($_SESSION["messages"], true) : "" ?>;
  user = <?= isset($_SESSION["user"]) ? '"'.$_SESSION["user"].'"' : "" ?>;
</script>
<script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
<script src="javaScript/chatScript.js"></script>
</body>
</html>
<?php
unset(
	$_SESSION["messages"],
	$_SESSION["user"]
);
?>

