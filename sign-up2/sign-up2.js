document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!agreeTerms) {
        alert('You must agree to the User Agreement and Privacy Policy.');
        return;
    }

    alert('Sign up successful! Redirecting to sign-in page...');
    // Redirect to signin.html after successful sign-up
    setTimeout(function() {
        window.location.href = "/sign-in/signin.html";
    }, 1000); // Redirect after 1 seconds
});