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