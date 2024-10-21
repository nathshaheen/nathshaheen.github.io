/*
 * Dark/Light mode
 */

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', null);
}

let lightMode = localStorage.getItem("lightMode");
if (lightMode === 'enabled') {
    enableLightMode();
}

const lightModeToggle = document.getElementById('appearance-toggle');
lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== 'enabled') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});

/*
 * Minimal navigation bar on scroll
 */

window.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    this.scrollY > 100 ? navBar.style.paddingTop = "1.875rem" : navBar.style.paddingTop = "4.9375rem";
    this.scrollY > 100 ? navBar.style.paddingBottom = "1rem" : navBar.style.paddingBottom = "2rem";

    const navH1 = document.querySelector("nav h1");
    this.scrollY > 100 ? navH1.style.fontSize = "2rem" : navH1.style.fontSize = "4rem";

    var navUl = document.querySelector("nav ul");
    this.scrollY > 100 ? navUl.style.marginTop = "1rem" : navUl.style.marginTop = "2rem";
});

/*
 * Page up button
 */

const pageUpButton = document.getElementById("page-up");
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        pageUpButton.style.display = "block";
    } else {
        pageUpButton.style.display = "none";
    }
}

const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
