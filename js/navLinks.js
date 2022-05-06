const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("navBar");
const navLinks = document.querySelectorAll(".nav-links li");

//*close the nav links if opened
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        //*toggle the Nav links
        nav.classList.toggle("nav-active");
        //*Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease  ${index / 7 + 0.3}s`;
            }
        });
        //*burger animation
        burger.classList.toggle("toggle");
    });
});
burger.onclick = function () {
    //*toggle the Nav links
    nav.classList.toggle("nav-active");
    //*Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //*burger animation
    burger.classList.toggle("toggle");
};
