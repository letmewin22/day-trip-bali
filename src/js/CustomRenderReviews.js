import Highway from '@dogstudio/highway'

class CustomRendererReviews extends Highway.Renderer {
  onEnterCompleted() {

    if (document.querySelector('.loader').style.opacity === '0') {
      let load = () => {
        document.querySelector('.loader').style.opacity = 0
        document.querySelector('.loader').style.pointerEvents = 'none'

      }
      load()
    }

    window.onload = (e) => {

      let load = () => {
        document.querySelector('.loader').style.opacity = 0
        document.querySelector('.loader').style.pointerEvents = 'none'

      }
      load()
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererReviews
