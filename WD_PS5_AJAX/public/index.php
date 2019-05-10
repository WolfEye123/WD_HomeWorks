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
        <form class="chat_form" action="../resources/php/authorization.php" method="post">
            <div class="chat_name">Easy Chat</div>
            <div class="chat_inputs">
                <input type="hidden" name="function" value="0">
                <label for="chat_userName">Enter your name</label>
                <input type="text"
                       name="user"
                       class="chat_userName"
                       id="chat_userName"
                       required>
                <label for="chat_userPassword">Enter your password</label>
                <input type="password"
                       name="password"
                       class="chat_userPassword"
                       id="chat_userPassword"
                       required>
                <div id="passError"
                     class="<?= isset($_SESSION['passError']) ? $_SESSION['passError'] : 'hideError' ?>">
                    Incorrect login or password. Try again
                </div>
                <input type="submit" value="Submit">
            </div>
        </form>
    </section>
</section>
</body>
</html>
<?php
unset(
	$_SESSION['passError']
);
?>
