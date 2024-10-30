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
    const scrollDepth = 1;

    const navBar = document.querySelector("nav");
    this.scrollY > scrollDepth ? navBar.style.paddingTop = "2rem" : navBar.style.paddingTop = "6rem";

    this.scrollY > scrollDepth ? navBar.style.paddingBottom = "2rem" : navBar.style.paddingBottom = "4rem";

    const navH1 = document.querySelector("nav h1");
    this.scrollY > scrollDepth ? navH1.style.fontSize = "2rem" : navH1.style.fontSize = "3rem";

    const navUl = document.querySelector("nav ul");
    this.scrollY > scrollDepth ? navUl.style.marginTop = "1rem" : navUl.style.marginTop = "2rem";

    // const navLi = navUl.getElementsByTagName("li");
    // for (let i = 0; navLi[i]; i++) {
    //     const temp = navLi[i].querySelector("a");
    //     this.scrollY > 100 ? temp.style.fontSize = "1rem" : temp.style.fontSize = "1.2rem";
    // }
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
