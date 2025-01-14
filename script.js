// Select the navbar
const navbar = document.querySelector('.navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Check scroll position
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add 'scrolled' class
  } else {
    navbar.classList.remove('scrolled'); // Remove 'scrolled' class
  }
});
