/*
 * Dark/Light mode
 */

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', 'disabled');
}

if (localStorage.getItem("lightMode") === 'enabled') {
    enableLightMode();
} else if (localStorage.getItem("lightMode") === 'disabled') {
    disableLightMode();
} else {
    // No mode has previously been selected so determine mode based on system settings
    let prefersLight = window.matchMedia("(prefers-color-scheme:light)").matches;
    if (prefersLight) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

const lightModeToggle = document.getElementById('mode-toggle');
lightModeToggle.addEventListener('click', () => {
    localStorage.getItem("lightMode") !== 'enabled' ? enableLightMode() : disableLightMode();
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
