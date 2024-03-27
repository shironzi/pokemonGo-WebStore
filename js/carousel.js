const slides = document.querySelectorAll('.carousel-item');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

document.getElementById('next-button').addEventListener('click', () => {
    nextSlide();
});

document.getElementById('prev-button').addEventListener('click', () => {
    prevSlide();
});

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("active");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

window.onload = initializeSlider;
