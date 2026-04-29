document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav.container-fluid');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}
