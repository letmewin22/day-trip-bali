
import sayHello from './lib/sayHello.js';
import FormInputs from './form.js';
import Slider from './slider.js';
import './menu.js';
import './preloader.js';
import { TimelineMax } from 'gsap';
import './scroll.js';
const charming = require('charming');
import Splitting from 'splitting';

FormInputs();

Slider();

let h1Splitter = [...document.querySelectorAll('h1 .splitter')];
let h2Splitter = [...document.querySelectorAll('h2 .splitter')];
let h1 = document.querySelector('h1');
let h1Desc = document.querySelector('.header__content__description');
let video = document.querySelector('.header__video');
let infoBlock = document.querySelector('.info-block');

for (let i = 0; i < h1Splitter.length; i++) {
  charming(h1Splitter[i]);
}

for (let i = 0; i < h2Splitter.length; i++) {
  charming(h2Splitter[i]);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    for (let i = 0; i < h1Splitter.length; i++) {
      h1.style.opacity = '1';
      let splitterSpan = h1Splitter[i].querySelectorAll('span');
      let tl = new TimelineMax;
      tl
        .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07);
    }
    let tl2 = new TimelineMax();
    tl2
      .to(h1Desc, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0)
      .to(video, 1.2, { opacity: 1, ease: Power2.easeOut }, 0.2)
      .to(infoBlock, 1.2, { opacity: 1, y: 0, ease: Power2.easeOut }, 0.7);
  }, 500);

});
