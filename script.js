// Reveal sections on scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        revealOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

sections.forEach(section => {
  section.classList.add('hidden-section');
  revealOnScroll.observe(section);
});

// Optional: Smooth scroll (already handled by CSS scroll-behavior)
