import Highway from '@dogstudio/highway';
import Fade from './Fade';
import sayHello from './lib/sayHello.js';
import FormInputs from './form.js';
import './menu.js';
import './scroll.js';
import CustomRendererMain from './CustomRenderMain';
import CustomRendererReviews from './CustomRenderReviews';
import CustomRendererTours from './CustomRenderTours';


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    reviews: CustomRendererReviews,
    tour: CustomRendererTours
  },
  transitions: {
    default: Fade
  }
});


FormInputs();




