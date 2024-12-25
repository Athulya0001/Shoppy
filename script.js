// Navbar menu toggling
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Carousel Banner
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = carousel.children;

let currentIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval;

const updateCarousel = () => {
  const width = carousel.offsetWidth;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateCarousel();
  }, 7000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

prevButton.addEventListener('click', () => {
  stopAutoSlide(); 
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
  updateCarousel();
  startAutoSlide();
});

nextButton.addEventListener('click', () => {
  stopAutoSlide(); 
  currentIndex = (currentIndex + 1) % totalSlides; 
  updateCarousel();
  startAutoSlide();
});

window.addEventListener('resize', () => updateCarousel());

startAutoSlide();