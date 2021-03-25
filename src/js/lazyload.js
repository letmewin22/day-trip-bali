const lazyLoader = () => {
  const targets = document.querySelectorAll('[data-lazy]')
  const bgtargets = document.querySelectorAll('[data-bglazy]')

  const lazyLoad = () => {
    const lazyBounding = () => {
      for (let i = 0; i !== targets.length; i++) {
        if (
          targets[i].getBoundingClientRect().top <= window.innerHeight * 0.95 &&
          targets[i].getBoundingClientRect().top > 0
        ) {
          if (!targets[i].classList.contains('activated')) {
            targets[i].classList.add('activated')
            const src = targets[i].getAttribute('data-lazy')
            targets[i].setAttribute('src', src)
            targets[i].classList.add('img-loaded')
          }
        }
      }
      window.requestAnimationFrame(lazyBounding)
    }
    window.requestAnimationFrame(lazyBounding)
  }

  const bglazyLoad = () => {
    const lazyBoundingBg = () => {
      for (let i = 0; i !== bgtargets.length; i++) {
        if (
          bgtargets[i].getBoundingClientRect().top <=
            window.innerHeight * 0.95 &&
          bgtargets[i].getBoundingClientRect().top > 0
        ) {
          if (!bgtargets[i].classList.contains('activated')) {
            bgtargets[i].classList.add('activated')
            const src = bgtargets[i].getAttribute('data-bglazy')
            bgtargets[i].style.backgroundImage = `url(${src})`
            bgtargets[i].classList.add('img-loaded')
          }
        }
      }
      window.requestAnimationFrame(lazyBoundingBg)
    }
    window.requestAnimationFrame(lazyBoundingBg)
  }

  targets.forEach(lazyLoad)
  bgtargets.forEach(bglazyLoad)
}

export default lazyLoader
