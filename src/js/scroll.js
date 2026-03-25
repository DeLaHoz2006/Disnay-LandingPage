function setButtonVisibility(button, isVisible) {
    if (!button) {
        return;
    }

    button.style.opacity = isVisible ? "1" : "0";
    button.style.visibility = isVisible ? "visible" : "hidden";
    button.style.pointerEvents = isVisible ? "auto" : "none";
}

function getScrollStep(container) {
    if (!container) {
        return 0;
    }

    return Math.max(container.clientWidth * 0.88, 220);
}

function setupCarousel({ container, btnLeft, btnRight }) {
    if (!container || !btnLeft || !btnRight) {
        return;
    }

    let scrollEndTimer;

    function updateButtons() {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const canScrollLeft = container.scrollLeft > 4;
        const canScrollRight = container.scrollLeft < maxScrollLeft - 4;

        setButtonVisibility(btnLeft, canScrollLeft);
        setButtonVisibility(btnRight, canScrollRight);
    }

    function scrollCarousel(direction) {
        container.scrollBy({
            left: getScrollStep(container) * direction,
            behavior: "smooth",
        });
    }

    btnLeft.addEventListener("click", () => {
        scrollCarousel(-1);
    });

    btnRight.addEventListener("click", () => {
        scrollCarousel(1);
    });

    container.addEventListener("scroll", () => {
        updateButtons();
        window.clearTimeout(scrollEndTimer);
        scrollEndTimer = window.setTimeout(updateButtons, 140);
    });

    window.addEventListener("load", updateButtons);
    window.addEventListener("resize", updateButtons);
}

setupCarousel({
    container: document.getElementById("carouselImages"),
    btnLeft: document.getElementById("btnLeft"),
    btnRight: document.getElementById("btnRight"),
});

setupCarousel({
    container: document.getElementById("carouselImages2"),
    btnLeft: document.getElementById("btnLeft2"),
    btnRight: document.getElementById("btnRight2"),
});

setupCarousel({
    container: document.getElementById("carouselImages3"),
    btnLeft: document.getElementById("btnLeft3"),
    btnRight: document.getElementById("btnRight3"),
});

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    const header = item.querySelector(".header");

    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        items.forEach((element) => {
            element.classList.remove("active");
            element.querySelector(".icon").textContent = "+";
        });

        if (!isActive) {
            item.classList.add("active");
            item.querySelector(".icon").textContent = "-";
        }
    });
});

// Subscription submit: evita recarga y lleva al usuario a la seccion de planes.
const subscriptionForm = document.getElementById("subscriptionForm");

if (subscriptionForm) {
    subscriptionForm.addEventListener("submit", (event) => {
        event.preventDefault();

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
