const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const carouselImages = document.getElementById('carouselImages');


function checkButtons() {
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


btnLeft.addEventListener('click', () => {
    carouselImages.scrollBy({
        left: -620,
        behavior: 'smooth'
    });
});

btnRight.addEventListener('click', () => {
    carouselImages.scrollBy({
        left: 620,
        behavior: 'smooth'
    });
});


carouselImages.addEventListener('scroll', checkButtons);


window.addEventListener('load', checkButtons);
window.addEventListener('resize', checkButtons);


carouselImages.addEventListener('scrollend', checkButtons);