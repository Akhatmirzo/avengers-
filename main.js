const menuBtn = document.querySelector('.nav-hamburger');
const closeBtn = document.querySelector('.close-menu');
const menuOverlay = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
      menuOverlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
      menuOverlay.classList.remove('show');
});

