
let slides = document.querySelectorAll('.input');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].checked = false;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].checked = true;
}

setInterval(nextSlide, 3000);
















