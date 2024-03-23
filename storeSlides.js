class CarouselController {
    constructor(selector, slide, slide1, nextButton, slide2, prevButton) {
        this.slidesStore = document.querySelectorAll(selector);
        this.slides = document.querySelectorAll(slide);
        this.slide1 = slide1;
        this.nextButton = nextButton;
        this.slide2 = slide2;
        this.prevButton = prevButton;
        this.slideStoreIndex = 0;

        document.querySelectorAll(this.slide1 + ', ' + this.nextButton).forEach(element => {
            element.addEventListener('click', () => {
                this.nextSlide();
            });
        });

        document.querySelectorAll(this.slide2 + ', ' + this.prevButton).forEach(element => {
            element.addEventListener('click', () => {
                this.prevSlide();
            });
        });
    }

    showButton(index) {
        this.slidesStore.forEach(slide => {
            slide.classList.remove("active");
        });
        
        this.slidesStore[index].classList.add("active");

        this.slides.forEach(slide => {
            slide.classList.remove("active", "next", "prev");
        });

        this.slides[index].classList.add("active");
    }

    prevSlide() {
        this.slideStoreIndex--;
        if (this.slideStoreIndex < 0) {
            this.slideStoreIndex = 1;
        }
        this.showButton(this.slideStoreIndex);
    }

    nextSlide() {
        this.slideStoreIndex++;
        if (this.slideStoreIndex > 1) {
            this.slideStoreIndex = 0;
        }
        this.showButton(this.slideStoreIndex);
    }
}

const carouselController = new CarouselController('.indicatorsProduct', '.Product', '#packageSlide1', '#packageSlide2', '#packageNext', '#packagePrev');
const coinsCarouselController = new CarouselController('.IndicatorsCoins', '.Coins', '#CoinsSlide1', '#coin-next', '#CoinsSlide2', '#coin-prev');
