document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    // Client-side validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!agreeTerms) {
        alert('You must agree to the User Agreement and Privacy Policy.');
        return;
    }

    // Show loading indicator (optional)
    const submitButton = document.querySelector('#signup-form button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Signing up...';

    // Send data to the server
    fetch('sign-up2.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `password=${encodeURIComponent(password)}&confirm-password=${encodeURIComponent(confirmPassword)}`,
    })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
        if (data.includes("Registration successful")) {
            // Redirect to the sign-in page after successful registration
            window.location.href = 'signin.html';
        } else {
            // Display error message from the server
            alert(data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    })
    .finally(() => {
        // Reset the button state
        submitButton.disabled = false;
        submitButton.textContent = 'Sign up';
    });
});