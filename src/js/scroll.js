const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const carouselImages = document.getElementById('carouselImages');

const btnLeft2 = document.getElementById('btnLeft2');
const btnRight2 = document.getElementById('btnRight2');
const carouselImages2 = document.getElementById('carouselImages2');

const btnLeft3 = document.getElementById('btnLeft3');
const btnRight3 = document.getElementById('btnRight3');
const carouselImages3 = document.getElementById('carouselImages3');

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

// Función para el tercer carrusel
function checkButtons3() {
    const scrollLeft3 = carouselImages3.scrollLeft;
    const maxScrollLeft3 = carouselImages3.scrollWidth - carouselImages3.clientWidth;
    
    if (scrollLeft3 > 0) {
        btnLeft3.style.opacity = '1';
        btnLeft3.style.visibility = 'visible';
        btnLeft3.style.pointerEvents = 'auto';
    } else {
        btnLeft3.style.opacity = '0';
        btnLeft3.style.visibility = 'hidden';
        btnLeft3.style.pointerEvents = 'none';
    }
    
    if (scrollLeft3 < maxScrollLeft3 - 5) {
        btnRight3.style.opacity = '1';
        btnRight3.style.visibility = 'visible';
        btnRight3.style.pointerEvents = 'auto';
    } else {
        btnRight3.style.opacity = '0';
        btnRight3.style.visibility = 'hidden';
        btnRight3.style.pointerEvents = 'none';
    }
}

// Eventos para el primer carrusel
btnLeft.addEventListener('click', () => {
    carouselImages.scrollBy({
        left: -1000,
        behavior: 'smooth'
    });
});

btnRight.addEventListener('click', () => {
    carouselImages.scrollBy({
        left: 1000,
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

// Eventos para el tercer carrusel
btnLeft3.addEventListener('click', () => {
    carouselImages3.scrollBy({
        left: -1800,
        behavior: 'smooth'
    });
});

btnRight3.addEventListener('click', () => {
    carouselImages3.scrollBy({
        left: 1800,
        behavior: 'smooth'
    });
});

carouselImages3.addEventListener('scroll', checkButtons3);
carouselImages3.addEventListener('scrollend', checkButtons3);

// Inicializar al cargar y al redimensionar
window.addEventListener('load', () => {
    checkButtons1();
});

window.addEventListener('load', () => {
    checkButtons2();
});

window.addEventListener('load', () => {
    checkButtons3();
});


window.addEventListener('resize', () => {
    checkButtons1();
});

window.addEventListener('resize', () => {
    checkButtons2();
});

window.addEventListener('resize', () => {
    checkButtons3();
});



const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const header = item.querySelector(".header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".icon").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".icon").textContent = "−";
      }
    });
  });

// Subscription submit: evita recarga y lleva al usuario a la sección de planes.
const subscriptionForm = document.getElementById("subscriptionForm");
if (subscriptionForm) {
    subscriptionForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = subscriptionForm.querySelector("#email");
        if (emailInput && !emailInput.checkValidity()) {
            emailInput.focus();
            return;
        }

        const planes = document.getElementById("planes");
        if (planes) {
            planes.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}