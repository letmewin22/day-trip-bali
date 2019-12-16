import Highway from '@dogstudio/highway';
import MainLoader from './preloader.js';
import Slider from './slider.js';

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {
    MainLoader();
    Slider();
    document.querySelector('.loader').classList.add('loaded');
    if (document.querySelector('.loader').classList.contains('loaded') === true) {
      let load = () => {
        document.querySelector('.loader').style.opacity = 0;
        document.querySelector('.loader').style.pointerEvents = 'none';

      };
      load();
    }

    window.onload = (e) => {

      let load = () => {
        document.querySelector('.loader').style.opacity = 0;
        document.querySelector('.loader').style.pointerEvents = 'none';

      };
      load();
    };
    let navI = document.querySelectorAll('.nav__item');
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse');
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererMain;
