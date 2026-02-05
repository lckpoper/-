const reveals = document.querySelectorAll('.reveal');
const parallaxItems = document.querySelectorAll('[data-parallax]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((item) => revealObserver.observe(item));

const handleParallax = () => {
  const scrollY = window.scrollY;
  parallaxItems.forEach((item) => {
    const speed = parseFloat(item.dataset.parallax || '0.1');
    item.style.transform = `translateY(${scrollY * speed * 0.2}px)`;
  });
};

window.addEventListener('scroll', handleParallax, { passive: true });
window.addEventListener('load', handleParallax);
