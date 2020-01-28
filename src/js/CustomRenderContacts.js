import Highway from '@dogstudio/highway'

class CustomRendererContacts extends Highway.Renderer {
  onEnterCompleted() {
    let loader = document.querySelector('.loader')
    loader.classList.add('loaded')
    if (loader.classList.contains('loaded') === true) {
      let navI = document.querySelectorAll('.nav__item')
      if (screen.width > 850) { 
        for (let i = 0; i < navI.length; i++) {
          navI[i].classList.add('inverse')
        }
      }
    }

    window.onload = (e) => {
      
      let load = () => {
        let navI = document.querySelectorAll('.nav__item')
        if (screen.width > 850) { 
          for (let i = 0; i < navI.length; i++) {
            navI[i].classList.add('inverse')
          }
        }

      }
      load()
      loader.style.opacity = 0
      loader.style.pointerEvents = 'none'
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererContacts
