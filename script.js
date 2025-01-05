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
  }, 5000);
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

// trending collection section
// Shoe more shoe less button

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('Projects');
  const button = document.getElementById('toggleButton');
  const visibleRows = 1;
  const breakpoints = {
    xs: 1, // extra small
    sm: 2, // small screen
    md: 3, // medium screen
    lg: 4, // large screen
    xl: 5, // extra large screen
  };

  function getItemsPerRow() {
    const width = window.innerWidth;
    if (width >= 1280) return breakpoints.xl;
    if (width >= 1024) return breakpoints.lg;
    if (width >= 768) return breakpoints.md;
    if (width >= 640) return breakpoints.sm;
    return breakpoints.xs;
  }

  function updateGrid(showAll = false) {
    const itemsPerRow = getItemsPerRow();
    const gridItems = grid.children;

    for (let i = 0; i < gridItems.length; i++) {
      if (showAll || i < visibleRows * itemsPerRow) {
        gridItems[i].style.display = 'block';
      } else {
        gridItems[i].style.display = 'none';
      }
    }
  }

  updateGrid();

  button.addEventListener('click', () => {
    const isShowingAll = button.textContent === 'Show Less';
    updateGrid(!isShowingAll);
    button.textContent = isShowingAll ? 'Show More' : 'Show Less';
  });

  window.addEventListener('resize', () => {
    if (button.textContent === 'Show More') {
      updateGrid();
    }
  });
});

// trending collection section
// localstorage

function addCart(product) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  
  // Check if the product is already in the cart
  const existingProduct = cartItems.find(item => item.name === product.name);
  
  if (existingProduct) {
      // If the product already exists, increase the quantity by 1
      existingProduct.quantity++;
  } else {
      // If the product is not in the cart, add it with quantity 1
      product.quantity = 1;
      cartItems.push(product);
  }

  // Save updated cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}