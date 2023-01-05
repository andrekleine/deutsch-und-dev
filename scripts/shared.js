const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  if (!backdrop.classList.contains('open')) {
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
  }
  mobileNav.classList.add('open');
});

backdrop.addEventListener('click', () => {
  if (backdrop.classList.contains('open')) {
    setTimeout(() => {
      backdrop.classList.remove('open');
    }, 10);
  }
  mobileNav.classList.remove('open');
});