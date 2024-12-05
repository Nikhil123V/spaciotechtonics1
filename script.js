const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) {
            slide.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
});

nextBtn.addEventListener('click', () => {
    showSlide((currentSlide + 1) % slides.length);
});

// Automatic slide transition
setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
}, 3000);
// Adjust the interval time as needed

showSlide(currentSlide); // Show the initial slide