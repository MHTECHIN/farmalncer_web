document.getElementById("signup-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!email || !mobile) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Stop form submission if fields are empty
        return;
    }

    if (mobile.length !== 10) {
        alert("Mobile number must be 10 digits long");
        event.preventDefault(); // Stop form submission if the mobile number length is invalid
        return;
    }

    // Remove event.preventDefault() to allow form submission
});
