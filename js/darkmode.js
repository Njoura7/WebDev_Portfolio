const darkMode = document.querySelector(".darkMode");
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
});
