document.getElementById('profileImg').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImg').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully!');
});
