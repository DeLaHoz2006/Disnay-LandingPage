const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const carouselImages = document.getElementById('carouselImages');

const btnLeft2 = document.getElementById('btnLeft2');
const btnRight2 = document.getElementById('btnRight2');
const carouselImages2 = document.getElementById('carouselImages2');

// Función para el primer carrusel
function checkButtons1() {
    const scrollLeft = carouselImages.scrollLeft;
    const maxScrollLeft = carouselImages.scrollWidth - carouselImages.clientWidth;
    
    if (scrollLeft > 0) {
        btnLeft.style.opacity = '1';
        btnLeft.style.visibility = 'visible';
        btnLeft.style.pointerEvents = 'auto';
    } else {
        btnLeft.style.opacity = '0';
        btnLeft.style.visibility = 'hidden';
        btnLeft.style.pointerEvents = 'none';
    }
    
    if (scrollLeft < maxScrollLeft - 5) {
        btnRight.style.opacity = '1';
        btnRight.style.visibility = 'visible';
        btnRight.style.pointerEvents = 'auto';
    } else {
        btnRight.style.opacity = '0';
        btnRight.style.visibility = 'hidden';
        btnRight.style.pointerEvents = 'none';
    }
}

// Función para el segundo carrusel
function checkButtons2() {
    const scrollLeft2 = carouselImages2.scrollLeft;
    const maxScrollLeft2 = carouselImages2.scrollWidth - carouselImages2.clientWidth;
    
    if (scrollLeft2 > 0) {
        btnLeft2.style.opacity = '1';
        btnLeft2.style.visibility = 'visible';
        btnLeft2.style.pointerEvents = 'auto';
    } else {
        btnLeft2.style.opacity = '0';
        btnLeft2.style.visibility = 'hidden';
        btnLeft2.style.pointerEvents = 'none';
    }
    
    if (scrollLeft2 < maxScrollLeft2 - 5) {
        btnRight2.style.opacity = '1';
        btnRight2.style.visibility = 'visible';
        btnRight2.style.pointerEvents = 'auto';
    } else {
        btnRight2.style.opacity = '0';
        btnRight2.style.visibility = 'hidden';
        btnRight2.style.pointerEvents = 'none';
    }
}

// Eventos para el primer carrusel
btnLeft.addEventListener('click', () => {
    carouselImages.scrollBy({
        left: -900,
        behavior: 'smooth'
    });
});

btnRight.addEventListener('click', () => {
    carouselImages.scrollBy({
        left: 900,
        behavior: 'smooth'
    });
});

carouselImages.addEventListener('scroll', checkButtons1);
carouselImages.addEventListener('scrollend', checkButtons1);

// Eventos para el segundo carrusel
btnLeft2.addEventListener('click', () => {
    carouselImages2.scrollBy({
        left: -2500,
        behavior: 'smooth'
    });
});

btnRight2.addEventListener('click', () => {
    carouselImages2.scrollBy({
        left: 2500,
        behavior: 'smooth'
    });
});

carouselImages2.addEventListener('scroll', checkButtons2);
carouselImages2.addEventListener('scrollend', checkButtons2);

// Inicializar al cargar y al redimensionar
window.addEventListener('load', () => {
    checkButtons1();
    checkButtons2();
});

window.addEventListener('resize', () => {
    checkButtons1();
    checkButtons2();
});