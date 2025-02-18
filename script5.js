document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const experience = document.getElementById('experience').value;
    const budget = document.getElementById('budget').value;
    const availability = document.getElementById('availability').value;

    if (!name || !mobile || !experience || !budget || !availability) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Details submitted successfully!');
    // Here you can add code to handle the form submission, like sending data to a server
});