import { TimelineMax, Power3 } from 'gsap'
import Highway from '@dogstudio/highway'
import ShapeOverlays from './ShapeOverlays'

const elmOverlay = document.querySelector('.shape-overlays')
const overlay = new ShapeOverlays(elmOverlay)

export default class Fade extends Highway.Transition {
  // Built-in methods
  out({ from, done }) {

    // if (this.overlay.isAnimating) return false

    overlay.toggle()

    let burger = document.querySelector('.burger')
    let nav = document.querySelector('.nav__items')
    let navItem = document.querySelectorAll('.nav__item')

    const clos = () => {
      burger.classList.remove('clicked')
      nav.classList.remove('show')
      for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove('active')
      };
    }
    clos()
    let tl = new TimelineMax({ onComplete: done })
    tl
      .to(from, 0.4, { opacity: 0, ease: Power3.easeInOut })
  }

  in({ from, to, done }) {
    from.remove()
    document.body.classList.remove('fixed')
    window.scrollTo(0, 0)

    let tl = new TimelineMax({ onComplete: () => {
      overlay.toggle()
      done() 
    }})
    
    tl
      .fromTo(to, 1, { opacity: 0 }, { opacity: 1, ease: Power3.easeInOut })
  }
};
