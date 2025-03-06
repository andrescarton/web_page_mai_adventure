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
const imageContainers = document.querySelectorAll('.carousel .image-container');

// Obtém a largura exata da imagem + margem
const imageWidth = imageContainers[0].offsetWidth + 16; 

let currentIndex = 0;

// Função para mover corretamente o carrossel
function scrollToImage(index) {
    let newScrollPosition = index * imageWidth;

    imagesContainer.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}

// Atualiza o índice apenas se for permitido
function moveCarousel(direction) {
    let maxIndex = imageContainers.length - 1;
    
    if (direction === 1 && currentIndex < maxIndex) {
        currentIndex++;
    } else if (direction === -1 && currentIndex > 0) {
        currentIndex--;
    }

    scrollToImage(currentIndex);
}

// Botões de navegação
leftButton.addEventListener('click', () => moveCarousel(-1));
rightButton.addEventListener('click', () => moveCarousel(1));

// Controle de deslize no celular (agora não responde a toques acidentais)
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;

imagesContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    isSwiping = false; // Reseta o estado do deslize
});

imagesContainer.addEventListener('touchmove', (event) => {
    touchEndX = event.touches[0].clientX;
    isSwiping = true; // Apenas se move se houve arrasto
});

imagesContainer.addEventListener('touchend', () => {
    if (!isSwiping) return; // Impede mudanças se não houver deslize

    let swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) { 
        moveCarousel(1); // Desliza para a esquerda → próxima imagem
    } else if (swipeDistance < -50) { 
        moveCarousel(-1); // Desliza para a direita → imagem anterior
    }
});

