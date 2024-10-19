const toggleButton = document.getElementById('appearance-toggle');

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

function changeCss () {
    var navElement = document.querySelector("nav");
    this.scrollY > 100 ? navElement.style.paddingTop = "1.875rem" : navElement.style.paddingTop = "4.9375rem";
    this.scrollY > 100 ? navElement.style.paddingBottom = "1rem" : navElement.style.paddingBottom = "2rem";

    var navH1Element = document.querySelector("nav h1");
    this.scrollY > 100 ? navH1Element.style.fontSize = "2rem" : navH1Element.style.fontSize = "4rem";

    var navUlElement = document.querySelector("nav ul");
    this.scrollY > 100 ? navUlElement.style.marginTop = "1rem" : navUlElement.style.marginTop = "2rem";
}
window.addEventListener("scroll", changeCss , false);