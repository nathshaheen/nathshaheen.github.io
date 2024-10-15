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