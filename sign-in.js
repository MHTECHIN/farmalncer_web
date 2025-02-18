document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mobile = document.getElementById('mobile').value.trim(); // Trim whitespace
    const password = document.getElementById('password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    // Client-side validation
    if (!mobile || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (!agreeTerms) {
        alert('You must agree to the User Agreement and Privacy Policy.');
        return;
    }

    // Show loading indicator (optional)
    const submitButton = document.querySelector('#signin-form button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Signing in...';

    // Send data to the server for validation
    fetch('sign-in.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `mobile=${encodeURIComponent(mobile)}&password=${encodeURIComponent(password)}`,
    })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
        if (data.includes("Sign in successful")) {
            // Redirect to the work screen after successful sign-in
            window.location.href = 'work-screen.html';
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
        submitButton.textContent = 'Sign in';
    });
});