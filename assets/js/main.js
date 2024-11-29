/*
 * Dark/Light mode
 */

const enableLightMode = () => {
    document.body.classList.add('light-appearance');
    localStorage.setItem('lightAppearance', 'enabled');
}

const disableLightMode = () => {
    document.body.classList.remove('light-appearance');
    localStorage.setItem('lightAppearance', 'disabled');
}

if (localStorage.getItem("lightAppearance") === 'enabled') {
    enableLightMode();
} else if (localStorage.getItem("lightAppearance") === 'disabled') {
    disableLightMode();
} else {
    // No mode has previously been selected so determine mode based on system settings
    let prefersLight = window.matchMedia("(prefers-color-scheme:light)").matches;
    if (prefersLight) {
        document.body.classList.add('light-appearance');
    } else {
        document.body.classList.remove('light-appearance');
    }
}

const lightModeToggle = document.getElementById('appearance-toggle');
lightModeToggle.addEventListener('click', () => {
    localStorage.getItem("lightAppearance") !== 'enabled' ? enableLightMode() : disableLightMode();
});
