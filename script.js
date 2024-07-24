let currentIndex = 0;

function slideLeft() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * 20}%)`;
    }
}

function slideRight() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    if (currentIndex < slides.length - 5) { // Adjust '5' to the number of slides shown at once
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * 20}%)`;
    }
}
