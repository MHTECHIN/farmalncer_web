<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['mobile'] = $_POST['mobile'];

    // Redirect to the next step
    header("Location: sign-up22.html");
    exit();
}
?>
