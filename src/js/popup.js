const popUp = (opts) => {

  const btn = opts.btn 
  const popUpWindow = opts.window

  const btnHandler = () => {

    if(typeof opts.cb === 'object')
      opts.cb.open()

    const padding = window.innerWidth - document.body.getBoundingClientRect().width
    popUpWindow.classList.add('open')
    document.body.classList.add('fixed')

    document.body.style.setProperty('--padding', `${padding}px`)

    popUpWindow.addEventListener('click', documentHandler)
  }

  const documentHandler = (e) => {

    if(e.target.classList.contains(opts.close)) {
      popUpWindow.classList.remove('open')
      
      if(typeof opts.cb === 'object')
        opts.cb.close()

      setTimeout(() => {
        document.body.classList.remove('fixed')
        document.body.style.removeProperty('--padding')
      }, 1000)


      popUpWindow.removeEventListener('click', documentHandler)
    }
  }

  btn.addEventListener('click', btnHandler) 
}

export default popUp
