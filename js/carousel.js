const slides = document.querySelectorAll('.event-item');
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

let activeButton = document.querySelector(".eventButton1");
let activeSlide = document.getElementById("newsSlide1");

document.querySelectorAll(".eventButton1, .eventButton2, .eventButton3").forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonClicked = event.target;

        if (buttonClicked !== activeButton) {
            if (activeButton) {
                activeButton.classList.remove("text-light");
                activeButton.classList.remove("bg-secondary");
            }

            buttonClicked.classList.add("text-light");
            buttonClicked.classList.add("bg-secondary");

            activeButton = buttonClicked;
        } else {
            buttonClicked.classList.add("text-light");
            buttonClicked.classList.add("bg-secondary");

            activeButton = buttonClicked;
        }

        if (buttonClicked.classList.contains("eventButton1")) {
            activeSlide.classList.remove("active");
            document.getElementById("newsSlide1").classList.add("active");
            activeSlide = document.getElementById("newsSlide1");
        } else if (buttonClicked.classList.contains("eventButton2")) {
            activeSlide.classList.remove("active");
            document.getElementById("newsSlide2").classList.add("active");
            activeSlide = document.getElementById("newsSlide2");
        } else {
            activeSlide.classList.remove("active");
            document.getElementById("newsSlide3").classList.add("active");
            activeSlide = document.getElementById("newsSlide3");
        }
    });
});
