document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Basic validation
    if (!email || !mobile) {
        alert('Please fill in all fields.');
        return;
    }

    // Redirect to sign-up2.html
    window.location.href = "/sign-up2/sign-up2.html";
});