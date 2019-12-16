import { TimelineMax } from 'gsap';
import imagesLoaded from 'imagesloaded';

const TourLoader = () => {
  const h1 = document.querySelector('h1');
  const p = document.querySelector('.tour-header__tour-content p');
  const button = document.querySelector('.tour-header__tour-content .button');
  const whiteBlock = document.querySelector('.white-block');
  const img = document.querySelector('.tour-header');

  const loader = () => {
    let tl = new TimelineMax();
    tl
      .to(h1, 1, { y: 0, opacity: 1, ease: Power2.easeInOut })
      .to(p, 1, { y: 0, opacity: 1, ease: Power2.easeInOut }, 0.2)
      .to(button, 1, { y: 0, opacity: 1, ease: Power2.easeInOut }, 0.4)
      .to(whiteBlock, 1, { y: 0, opacity: 1, ease: Power2.easeInOut }, 0.6);
  };
  imagesLoaded(img, { background: true }, function() {
    loader();
  });


};

export default TourLoader;
