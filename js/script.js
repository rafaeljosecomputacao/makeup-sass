/* Responsive menu */
function NavbarToggle() {
    let navbarToggle = document.querySelector('.navbar-toggle');

    if (navbarToggle.style.display === "none") {
        navbarToggle.style.display = "block";
    } else {
        navbarToggle.style.display = "none";
    }
}
