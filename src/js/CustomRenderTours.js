import Highway from '@dogstudio/highway';
import tab from './tabs.js';
import Gallery from './gallery.js';
import imagesLoaded from 'imagesloaded';
import TourLoader from './tourLoader.js';
// import Accordeon from './accordeon.js';

class CustomRendererTours extends Highway.Renderer {
  onEnterCompleted() {
    let img = document.querySelector('.tour-header');

    let loader = document.querySelector('.loader');



    tab();

    Gallery();

    loader.classList.add('loaded');

    if (loader.classList.contains('loaded') === true) {
      let navI = document.querySelectorAll('.nav__item');
      for (let i = 0; i < navI.length; i++) {
        navI[i].classList.add('inverse');
        TourLoader();
      }
    }

    window.onload = (e) => {
      imagesLoaded(img, { background: true }, function() {
        TourLoader();
        loader.style.opacity = 0;
        loader.style.pointerEvents = 'none';
      });
      let navI = document.querySelectorAll('.nav__item');
      for (let i = 0; i < navI.length; i++) {
        navI[i].classList.add('inverse');
      }
    };
    let burger = document.querySelector('.burger');

    burger.classList.add('tour');

  }

}
// Don`t forget to export your renderer
export default CustomRendererTours;
