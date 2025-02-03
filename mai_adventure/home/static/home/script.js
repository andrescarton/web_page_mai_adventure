function toggleMenu() {
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
});


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel .images');
    const prevButton = document.querySelector('.carousel button:first-of-type');
    const nextButton = document.querySelector('.carousel button:last-of-type');

    let scrollAmount = 0;
    const scrollStep = 220; // Adjust based on your image width

    prevButton.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - scrollStep, 0);
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        scrollAmount = Math.min(scrollAmount + scrollStep, carousel.scrollWidth - carousel.clientWidth);
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    });
});