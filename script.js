// script.js

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
