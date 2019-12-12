import { TimelineMax } from 'gsap';

export default function Gallery() {
  // The Slide (Product) class.
  class Slide {
    constructor(el, settings) {
      this.DOM = {el: el};
            
      this.settings = {
        detailsEl: null,
        onHideDetails: () => {return false;}
      };
      Object.assign(this.settings, settings);

      this.DOM.wrap = this.DOM.el.querySelector('.slide__wrap');
      this.DOM.img = this.DOM.wrap.querySelector('.slide__img');

      this.config = {
        animation: {
          duration: 1.2,
          ease: Expo.easeInOut
        }
      };
    }
    // Sets the current class.
    setCurrent(isCurrent = true) {
      this.DOM.el.classList[isCurrent ? 'add' : 'remove']('slide--current');
    }
    // Hide the slide.
    hide(direction) {
      return this.toggle('hide', direction);
    }
    // Show the slide.
    show(direction) {
      this.DOM.el.style.zIndex = 1000;
      return this.toggle('show', direction);
    }
    // Show/Hide the slide.
    toggle(action, direction) {
      return new Promise((resolve, reject) => {

        if ( action === 'show' ) {
          TweenMax.to(this.DOM.wrap, this.config.animation.duration, {
            ease: this.config.animation.ease,
            startAt: {x: direction === 'right' ? '100%' : '-100%'},
            x: '0%'
          });
        }

        TweenMax.to(this.DOM.img, this.config.animation.duration, {
          ease: this.config.animation.ease,
          startAt: action === 'hide' ? {} : {x: direction === 'right' ? '-100%' : '100%', scale: 1.1},
          x: '0%',
          scale: action === 'hide' ? 1.1 : 1,
          onStart: () => {
            this.DOM.img.style.transformOrigin = action === 'hide' ? 
              direction === 'right' ? '100% 50%' : '0% 50%':
              direction === 'right' ? '0% 50%' : '100% 50%';
            this.DOM.el.style.opacity = 1;
          },
          onComplete: () => {
            this.DOM.el.style.zIndex = 999;
            this.DOM.el.style.opacity = action === 'hide' ? 0 : 1;
            resolve();
          }
        });
      });
    }

  }

  // The navigation class. Controls the .boxnav animations (e.g. pagination animation).
  class Navigation {
    constructor(el, settings) {
      this.DOM = {el: el};

      this.settings = {
        next: () => {return false;},
        prev: () => {return false;}
      };
      Object.assign(this.settings, settings);

      // Navigation controls (prev and next)
      this.DOM.prevCtrl = this.DOM.el.querySelector('.boxnav__item--prev');
      this.DOM.nextCtrl = this.DOM.el.querySelector('.boxnav__item--next');
      // The current and total pages elements.
      // this.DOM.pagination = {
      //   current: this.DOM.el.querySelector('.boxnav__label--current'),
      //   total: this.DOM.el.querySelector('.boxnav__label--total')
      // };
      this.initEvents();
    }
    setCurrent(val, direction) {
      //this.DOM.pagination.current.innerHTML = val;
      // TweenMax.to(this.DOM.pagination.current, 0.4, {
      //   ease: 'Back.easeIn',
      //   y: direction === 'right' ? '-100%' : '100%',
      //   opacity: 0,
      //   onComplete: () => {
      //     // this.DOM.pagination.current.innerHTML = val;
      //     TweenMax.to(this.DOM.pagination.current, 0.8, {
      //       ease: 'Expo.easeOut',
      //       startAt: {y: direction === 'right' ? '50%' : '-50%', opacity: 0},
      //       y: '0%',
      //       opacity: 1
      //     });    
      //   }
      // });
    }
    // Sets the total pages value.
    // setTotal(val) {
    //   this.DOM.pagination.total.innerHTML = val;
    // }

    initEvents() {
      this.DOM.prevCtrl.addEventListener('click', () => this.settings.prev());
      this.DOM.nextCtrl.addEventListener('click', () => this.settings.next());
    }
  }

  // The Slideshow class.
  class Slideshow {
    constructor(el) {
      this.DOM = {el: el};
      this.navigation = new Navigation(document.querySelector('.boxnav'), {
        next: () => this.navigate('right'),
        prev: () => this.navigate('left')
      });

      this.DOM.detailsWrap = document.querySelector('.details-wrap');

      this.slides = [];

      Array.from(this.DOM.el.querySelectorAll('.slide')).forEach((slideEl,pos) => this.slides.push(new Slide(slideEl, {

      })));

      this.slidesTotal = this.slides.length;

      // this.navigation.setTotal(this.slidesTotal);

      if ( this.slidesTotal < 2 ) {
        return false;
      }

      this.current = 0;

      this.init();
    }

    init() {
      this.slides[this.current].setCurrent();
    }

    navigate(direction) {
      if ( this.isAnimating ) return;
      this.isAnimating = true;

      const nextSlidePos = direction === 'right' ? 
        this.current < this.slidesTotal-1 ? this.current+1 : 0 :
        this.current > 0 ? this.current-1 : this.slidesTotal-1;


      this.navigation.setCurrent(nextSlidePos+1, direction);
                
      Promise.all([this.slides[this.current].hide(direction), this.slides[nextSlidePos].show(direction)])
        .then(() => {
          // Update current.
          this.slides[this.current].setCurrent(false);
          this.current = nextSlidePos;
          this.slides[this.current].setCurrent();
          this.isAnimating = false;
        });
    }
  }

  // Initialize the slideshow
  const slideshow = new Slideshow(document.querySelector('.slideshow'));
  // Preload all the images..
}
