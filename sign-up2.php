<?php
session_start();
require 'db.php'; // Database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_SESSION['email'] ?? '';
    $mobile = $_SESSION['mobile'] ?? '';
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password

    // Check if email or mobile is missing in the session
    if (empty($email) || empty($mobile)) {
        echo "<script>alert('Session expired. Please start the signup again.'); window.location.href='sign-up1.html';</script>";
        exit();
    }

    // Check if email already exists
    $check_stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check_stmt->bind_param("s", $email);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        echo "<script>alert('Email already registered! Please sign in.'); window.location.href='signin.html';</script>";
        exit();
    }
    $check_stmt->close();

    // Insert user into the database
    $stmt = $conn->prepare("INSERT INTO users (email, mobile, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $mobile, $password);

    if ($stmt->execute()) {
        echo "<script>
                alert('Registration successful! Redirecting to sign-in page...');
                window.location.href = 'signin.html';
              </script>";
    } else {
        echo "<script>alert('Error: " . $stmt->error . "');</script>";
    }

    $stmt->close();
    session_destroy(); // Clear the session after successful registration
}
?>
