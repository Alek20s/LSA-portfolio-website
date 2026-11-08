
// Mobile navigation
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// Dark and light mode
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    themeButton.textContent = isLight ? "☾" : "☀";

    themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
});
