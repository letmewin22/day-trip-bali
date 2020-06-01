import { TimelineMax, Linear } from 'gsap'

const ripplyScott = function() {

  const ripple = document.querySelectorAll('.js-ripple')

  function rippleAnimation(event, timing) {
    const tl = new TimelineMax(),
      x = event.offsetX,
      y = event.offsetY,
      w = event.target.offsetWidth,
      h = event.target.offsetHeight,
      offsetX = Math.abs((w / 2) - x),
      offsetY = Math.abs((h / 2) - y),
      deltaX = (w / 2) + offsetX,
      deltaY = (h / 2) + offsetY,
      scaleRatio = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))


    tl.fromTo(ripple, timing, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    }, {
      scale: scaleRatio,
      opacity: 0
    })

    return tl
  }

  return {
    init: function(target, timing) {
      const button = document.querySelector('.'+target)

      button.addEventListener('mouseenter', function(event) {
        rippleAnimation.call(this, event, timing)
      })
    }
  }
}
export default ripplyScott
