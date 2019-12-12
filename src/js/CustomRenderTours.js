import Highway from '@dogstudio/highway';
import tab from './tabs.js';
import Gallery from './gallery.js';

class CustomRendererTours extends Highway.Renderer {
  onEnterCompleted() {
    let navI = document.querySelectorAll('.nav__item');
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.add('inverse');
    }
    tab();
    Gallery();
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
  }
}
// Don`t forget to export your renderer
export default CustomRendererTours;
