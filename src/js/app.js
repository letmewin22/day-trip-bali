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
import moveEl from './lib/moveEl'
import Dropdown from './dropdown'
import {onYouTubeIframeAPIReady} from './YTplayer.js'

const adminBar = document.querySelector('#wpadminbar')
const links = document.querySelectorAll('.nav__item a')

onYouTubeIframeAPIReady()

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



  H.on('NAVIGATE_IN', ({location }) => {
    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      link.classList.remove('is-current')

      if (link.href === location.href) {
        link.classList.add('is-current')
      }
    }
    moveEl()
  })

  window.addEventListener('load', () => {
    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      link.classList.remove('is-current')

      if (link.href === location.href) {
        link.classList.add('is-current')
      }
    }
    moveEl()

    const dropdown = new Dropdown({btn: '.dropbtn', items: '.dropdown-content', parent: '.dropdown'})
    dropdown.init()
  })

  window.addEventListener('DOMContentLoaded', () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  })

  H.on('NAVIGATE_END', () => {
    lazyLoader()
  })


}

window.addEventListener('DOMContentLoaded', () => {
  lazyLoader()
}, false)
