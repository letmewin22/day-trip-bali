import Highway from '@dogstudio/highway'
import Fade from './Fade'
import sayHello from './lib/sayHello.js'
import FormInputs from './form.js'
import './menu.js'
import './scroll.js'
import './loader.js'
import CustomRendererMain from './CustomRenderMain'
import CustomRendererReviews from './CustomRenderReviews'
import CustomRendererTours from './CustomRenderTours'
import CustomRendererContacts from './CustomRenderContacts'


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    reviews: CustomRendererReviews,
    tour: CustomRendererTours,
    contacts: CustomRendererContacts
  },
  transitions: {
    default: Fade
  }
})


FormInputs()
