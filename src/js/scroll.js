/*eslint-disable*/
import { TimelineMax } from 'gsap';


function sectionInView() {

  let elements = document.querySelectorAll('section');
  for (let i = 0; i != elements.length; i++) {
    if (elements[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && elements[i].getBoundingClientRect().top > 0) {
      
      if (!elements[i].classList.contains('activated')) {
        elements[i].classList.add('activated');
     
      let tl = new TimelineMax()
      tl
        // .to(elements[i].querySelectorAll('h2'), 0.8, { x: 0, opacity: 1, ease: Power1.easeOut }, 0.3)
        .to(elements[i].querySelectorAll('h3'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.3)
        .to(elements[i].querySelectorAll('.strip-outer'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.3)
        .staggerTo(elements[i].querySelectorAll('svg'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.08, 0.5)
        .staggerTo(elements[i].querySelectorAll('img'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.15, 0.5)
        .staggerTo(elements[i].querySelectorAll('p'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.08, 0.5)
        .staggerTo(elements[i].querySelectorAll('.choose-items__item svg'), 0.8, { opacity: 1, ease: Power1.easeOut }, 0.08, 0.5)
      for (let j = 0; j < elements[i].querySelectorAll('h2 span').length; j++) {
        let splitterSpan = elements[i].querySelectorAll('h2 span')[j].querySelectorAll('span');
        let tl = new TimelineMax;
        tl
          .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.06, 0.3);
      }
    }
     }
  };

  window.requestAnimationFrame(sectionInView);

};


function footer() {
  let elements = document.querySelectorAll('footer');
  for (let i = 0; i != elements.length; i++) {
    
    if (elements[i].getBoundingClientRect().top <= window.innerHeight * 0.5 && elements[i].getBoundingClientRect().top > 0) {
      if (!elements[i].classList.contains('activated')) {
        elements[i].classList.add('activated');
      let tl = new TimelineMax()
      tl
        .to(elements[i].querySelectorAll('form'), 0.7, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.1)
        .staggerTo(elements[i].querySelectorAll('p'), 0.8, { x: 0, opacity: 1, ease: Power1.easeOut }, 0.08, 0.1)
        .staggerTo(elements[i].querySelectorAll('a'), 0.8, { x: 0, opacity: 1, ease: Power1.easeOut }, 0.08, 0.1)
        .staggerTo(elements[i].querySelectorAll('img'), 0.8, { y: 0, opacity: 1, ease: Power1.easeOut }, 0.15, 0.1)

      for (let j = 0; j < elements[i].querySelectorAll('h2 span').length; j++) {
        let splitterSpan = elements[i].querySelectorAll('h2 span')[j].querySelectorAll('span');
        let tl = new TimelineMax;
        tl
          .staggerTo(splitterSpan, 1.6, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07, 0);
      }
    }
  }
  };
  window.requestAnimationFrame(footer);
};




window.requestAnimationFrame(sectionInView);
window.requestAnimationFrame(footer);
