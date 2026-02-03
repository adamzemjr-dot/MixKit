// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
reveals.forEach(r => observer.observe(r));

// Active nav
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const link = document.querySelector(`nav a[href="#${sec.id}"]`);
    if (!link) return;
    const top = sec.offsetTop - 200;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Logo easter egg
document.getElementById('logo').onclick = () =>
  window.scrollTo({ top: 0, behavior: 'smooth' });
