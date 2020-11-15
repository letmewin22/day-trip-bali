let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav__items')
let navItem = document.querySelectorAll('.nav__item')
let navBar = document.querySelector('.nav')

burger.addEventListener('click', () => {
  burger.classList.toggle('clicked')
  nav.classList.toggle('show')
  document.querySelector('.nav__logo').classList.add('invisible')
  document.body.classList.toggle('fixed')
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle('active')
  }
})


// let scrollPos = 0
// let winScroll = document.documentElement.scrollTop
// let winHeight = window.innerHeight
// let percent = winScroll / winHeight * 100


// window.addEventListener('scroll', () => {
//   if ((document.body.getBoundingClientRect()).top > scrollPos && percent > 10) {
//     navBar.style.opacity = 1
//   } else {
//     navBar.style.opacity = 0
//   }
//   scrollPos = (document.body.getBoundingClientRect()).top
// })

function logo() {
  
  let winScroll = document.documentElement.scrollTop
  let winHeight = window.innerHeight
  let percent = winScroll / winHeight * 100
  if (percent > 10 || burger.classList.contains('clicked') === true) {
    document.querySelector('.nav__logo').classList.add('invisible')
  } else if (percent < 10 && !burger.classList.contains('clicked')) {
    document.querySelector('.nav__logo').classList.remove('invisible')
  }
  window.requestAnimationFrame(logo)
};

window.requestAnimationFrame(logo)
