/*function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Abre/fecha o menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu-icon') && !event.target.closest('.nav-links')) {
        navLinks.classList.remove('active');
    }
});*/


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

