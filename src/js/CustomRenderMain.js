import Highway from '@dogstudio/highway'
import MainLoader from './preloader.js'
import Slider from './slider.js'
// import FormInputs from './form.js'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {
    const loader = document.querySelector('.loader')
    window.addEventListener('load', MainLoader)

    if (loader.classList.contains('loaded') === true) {
      MainLoader()
    }
    Slider()
    // FormInputs()
    const links = document.querySelectorAll('.nav__item a')

    let navI = document.querySelectorAll('.nav__item')
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse')
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererMain
