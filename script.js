// Parallax effect for banner
const bannerImage = document.querySelector('.banner-image');
if (bannerImage) {
  window.addEventListener('scroll', () => {
    let offset = window.scrollY * 0.4; // adjust speed here
    bannerImage.style.transform = `translateY(${offset}px)`;
  });
}

// Fade-in effect for sections
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Form submission confirmation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        formMessage.style.display = 'block';
        contactForm.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      alert("Error: " + error);
    });
  });
}
