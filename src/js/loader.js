(function() {

  window.onload = (e) => {
    let loader = document.querySelector('.loader')
    loader.classList.add('loaded')

    loader.style.opacity = 0
    loader.style.pointerEvents = 'none'
  }
})()
