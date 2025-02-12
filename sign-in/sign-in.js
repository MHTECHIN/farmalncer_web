document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    if (!mobile || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (!agreeTerms) {
        alert('You must agree to the User Agreement and Privacy Policy.');
        return;
    }

    alert('Sign in successful!');
    // Here you can add code to handle the form submission, like sending data to a server
});