const lazyLoader = () => {

  const targets = document.querySelectorAll('[data-lazy]')
  const bgtargets = document.querySelectorAll('[data-bglazy]')

  const lazyLoad = target => {
    if ('IntersectionObserver' in window) {

      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute('data-lazy')

            img.setAttribute('src', src)
            img.classList.add('img-loaded')

            observer.disconnect()
          }
        })
      })
      io.observe(target)
    } else {

      const lazyBounding = () => {

        for (let i = 0; i !== targets.length; i++) {
          if (targets[i].getBoundingClientRect().top <= window.innerHeight * 0.95 && targets[i].getBoundingClientRect().top > 0) {
            if (!targets[i].classList.contains('activated')) {
              targets[i].classList.add('activated')
              const src = targets[i].getAttribute('data-lazy')
              console.log(src)
              targets[i].setAttribute('src', src)
              targets[i].classList.add('img-loaded')
            }
          }
        }
        window.requestAnimationFrame(lazyBounding)
      }
      window.requestAnimationFrame(lazyBounding)


    };
  }


  const bglazyLoad = bgtarget => {
    if ('IntersectionObserver' in window) {
      const iobg = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute('data-bglazy')
            img.style.backgroundImage = `url(${src})`
            img.classList.add('img-loaded')

            observer.disconnect()
          }
        })
      })
      iobg.observe(bgtarget)
    } else {
      const lazyBoundingBg = () => {

        for (let i = 0; i !== bgtargets.length; i++) {
          if (bgtargets[i].getBoundingClientRect().top <= window.innerHeight * 0.95 && bgtargets[i].getBoundingClientRect().top > 0) {
            if (!bgtargets[i].classList.contains('activated')) {
              bgtargets[i].classList.add('activated')
              const src = bgtargets[i].getAttribute('data-bglazy')
              console.log(src)
              bgtargets[i].style.backgroundImage = `url(${src})`
              bgtargets[i].classList.add('img-loaded')
            }
          }
        }
        window.requestAnimationFrame(lazyBoundingBg)
      }
      window.requestAnimationFrame(lazyBoundingBg)
    }
  }

  targets.forEach(lazyLoad)
  bgtargets.forEach(bglazyLoad)

}

export default lazyLoader
