let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav__items');
let navItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
  burger.classList.toggle('clicked');
  nav.classList.toggle('show');
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle('active');
  }
});

