document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menu-icon');
    if (menu.classList.contains('menu-hidden')) {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-visible');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menu.classList.remove('menu-visible');
        menu.classList.add('menu-hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
    var menuIcon = document.getElementById('menu-icon');
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('menu-visible');
        menu.classList.add('menu-hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

        const leftButton = document.querySelector('.carousel .left');
        const rightButton = document.querySelector('.carousel .right');
        const imagesContainer = document.querySelector('.carousel .images');

        leftButton.addEventListener('click', () => {
            imagesContainer.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });

        rightButton.addEventListener('click', () => {
            imagesContainer.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });

