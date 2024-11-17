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

if (localStorage.getItem("lightMode") === 'enabled') {
    enableLightMode();
}

const lightModeToggle = document.getElementById('appearance-toggle');
lightModeToggle.addEventListener('click', () => {
    localStorage.getItem("lightMode") !== 'enabled' ? enableLightMode() : disableLightMode();
});

/*
 * Minimal navigation bar on scroll
 */
const navBar = document.querySelector("nav");
const navH1 = document.querySelector("nav h1");
const navUl = document.querySelector("nav ul");
window.addEventListener("scroll", () => {
    const scrollDepth = 10;

    let scrolled = this.scrollY > scrollDepth;
    scrolled ? navBar.style.paddingTop = "2rem" : navBar.style.paddingTop = "6rem";
    scrolled ? navBar.style.paddingBottom = "2rem" : navBar.style.paddingBottom = "4rem";
    scrolled ? navH1.style.fontSize = "2rem" : navH1.style.fontSize = "3rem";
    scrolled ? navUl.style.marginTop = "1rem" : navUl.style.marginTop = "2rem";
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
