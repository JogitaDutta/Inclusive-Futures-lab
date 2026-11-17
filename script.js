
/* =========================================
   INCLUSIVE FUTURES LAB
   JavaScript interactions
========================================= */

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// Close the mobile menu after selecting a navigation link
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


// Automatically update the copyright year
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// Close the menu if the user clicks outside the navigation
document.addEventListener("click", (event) => {
    const clickedInsideNavigation =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedInsideNavigation) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});
