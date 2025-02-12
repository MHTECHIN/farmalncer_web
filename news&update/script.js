function goBack() {
    window.history.back();
}

// Make navigation highlight active tab
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("footer nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
