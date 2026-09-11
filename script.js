document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const mobileToggle = document.createElement('button');
  const nav = document.querySelector('.nav-links');

  if (!nav) return;

  mobileToggle.className = 'menu-toggle';
  mobileToggle.setAttribute('aria-label', 'Toggle navigation');
  mobileToggle.innerHTML = '☰';

  const navContainer = document.querySelector('.nav');
  if (navContainer) {
    navContainer.appendChild(mobileToggle);
  }

  const closeMenu = () => {
    nav.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  };

  mobileToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !mobileToggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 20);
  });
});
