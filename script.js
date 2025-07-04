function showNav() {
    document.querySelector('header ul').classList.add('active');
    document.getElementById('hamburger-icon').classList.add('active');
    document.getElementById('close-icon').classList.add('active');
}
function hideNav() {
    document.querySelector('header ul').classList.remove('active');
    document.getElementById('hamburger-icon').classList.remove('active');
    document.getElementById('close-icon').classList.remove('active');
}

// for the animation 
document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll(
    ".aboutus, .aboutus img, .aboutus h2, .aboutus p, .trainer-card, .service-card, .excercise-card, .pricing-card, #reviews blockquote, #contact form, footer"
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          obs.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeEls.forEach(el => observer.observe(el));
});