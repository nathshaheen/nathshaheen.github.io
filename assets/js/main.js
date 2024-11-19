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
