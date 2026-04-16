const sections = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const offset = sec.offsetTop - 300;
    if (window.scrollY > offset) {
      sec.classList.add('show');
    }
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}