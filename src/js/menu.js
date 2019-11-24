// $('.burger, .overlay').click(function(){
//   $('.burger').toggleClass('clicked');
//   $('.overlay').toggleClass('show');
//   $('nav').toggleClass('show');
//   $('body').toggleClass('overflow');
// });

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav__items');

burger.addEventListener('click', function(e) {
  burger.classList.toggle('clicked');
  nav.classList.toggle('show');
});
