<?php
session_start();

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
    <section class="chat_colorLines">
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
    <section>
        <form id="enterForm" class="chat_form" action="../resources/php/authorization.php" method="post">
            <div class="chat_name">Easy Chat</div>
            <div class="chat_inputs">
                <input type="hidden" name="function" value="0">
                <label for="userName">Enter your name</label>
                <input type="text"
                       name="user"
                       class="chat_userName"
                       id="userName"
                       required>
                <label for="userPassword">Enter your password</label>
                <input type="password"
                       name="password"
                       class="chat_userPassword"
                       id="userPassword"
                       required>
                <div id="passError"
                     class="<?= isset($_SESSION['passError']) ? $_SESSION['passError'] : 'hideError' ?>">
                    Incorrect login or password. Try again
                </div>
                <div id="emptyFields" class="hideError">You must fill in all fields</div>
                <input type="submit" id="enterSubmit" class="submitShadow" value="Submit">
            </div>
        </form>
    </section>
</section>
<script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
<script src="javaScript/indexScript.js"></script>
</body>
</html>
<?php
unset(
	$_SESSION['passError']
);
?>
