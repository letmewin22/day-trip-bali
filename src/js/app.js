import Highway from '@dogstudio/highway'
import Fade from './Fade'
// import sayHello from './lib/sayHello.js'
import './menu.js'
import './scroll.js'
import './loader.js'
import lazyLoader from './lazyload.js'
import CustomRendererMain from './CustomRenderMain'
import CustomRendererReviews from './CustomRenderReviews'
import CustomRendererTours from './CustomRenderTours'
import CustomRendererContacts from './CustomRenderContacts'
import CustomRendererAbout from './CustomRenderAbout'
import './btn'

const adminBar = document.querySelector('#wpadminbar')
const links = document.querySelectorAll('.nav__item a')

if (!adminBar) {

  const H = new Highway.Core({
    renderers: {
      main: CustomRendererMain,
      reviews: CustomRendererReviews,
      tour: CustomRendererTours,
      contacts: CustomRendererContacts,
      about: CustomRendererAbout
    },
    transitions: {
      default: Fade
    }
  })



  H.on('NAVIGATE_IN', ({ to, location }) => {
    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      link.classList.remove('is-current')

      if (link.href === location.href) {
        link.classList.add('is-current')
      }
    }
  })

  window.addEventListener('load', (e) => {
    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      link.classList.remove('is-current')

      if (link.href === location.href) {
        link.classList.add('is-current')
      }
    }

  })

  window.addEventListener('DOMContentLoaded', (e) => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  })

  H.on('NAVIGATE_END', ({ from, to, location }) => {
    lazyLoader()
  })


}

window.addEventListener('DOMContentLoaded', (e) => {
  lazyLoader()
}, false)
