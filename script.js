// Reveal elements on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in, .hero-content');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Run on scroll and on page load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

console.log("JFLOW FPV site loaded with animations.");
