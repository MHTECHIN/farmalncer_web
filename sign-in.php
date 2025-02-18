<?php
session_start();
require 'db.php'; // Database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];

    // Check if mobile and password are provided
    if (empty($mobile) || empty($password)) {
        echo "<script>alert('Please fill in all fields.'); window.location.href='signin.html';</script>";
        exit();
    }

    // Fetch user from the database
    $stmt = $conn->prepare("SELECT id, mobile, password FROM users WHERE mobile = ?");
    $stmt->bind_param("s", $mobile);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $db_mobile, $db_password);
        $stmt->fetch();

        // Verify the password
        if (password_verify($password, $db_password)) {
            // Password is correct, set session variables
            $_SESSION['user_id'] = $id;
            $_SESSION['mobile'] = $db_mobile;

            echo "<script>
                    alert('Sign in successful! Redirecting to the work screen...');
                    window.location.href = 'work-screen.html';
                  </script>";
        } else {
            // Password is incorrect
            echo "<script>alert('Invalid password.'); window.location.href='signin.html';</script>";
        }
    } else {
        // User not found
        echo "<script>alert('User not found. Please sign up.'); window.location.href='sign-up1.html';</script>";
    }

    $stmt->close();
}
?>