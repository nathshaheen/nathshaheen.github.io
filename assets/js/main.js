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

/*
 * Page up button
 */

// const pageUpButton = document.getElementById("page-up");
// window.onscroll = () => {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         pageUpButton.style.display = "block";
//     } else {
//         pageUpButton.style.display = "none";
//     }
// }
//
// const pageUp = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }
