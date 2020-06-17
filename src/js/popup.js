import YTplayer from './YTplayer'

const popUp = () => {

  const btn = document.querySelector('.tour-header__video-btn')
  const popUpWindow = document.querySelector('.video-pop-up')

  const btnHandler = () => {
    YTplayer.startVideo()
    const padding = window.innerWidth - document.body.getBoundingClientRect().width
    popUpWindow.classList.add('open')
    document.body.classList.add('fixed')

    document.body.style.setProperty('--padding', `${padding}px`)

    popUpWindow.addEventListener('click', documentHandler)
  }

  const documentHandler = (e) => {
    if(!e.target.classList.contains('.video-pop-up__video')) {
      popUpWindow.classList.remove('open')
      
      YTplayer.stopVideo()
      setTimeout(() => {
        document.body.classList.remove('fixed')
        document.body.style.removeProperty('--padding')
      }, 500)


      popUpWindow.removeEventListener('click', documentHandler)
    }
  }

  btn.addEventListener('click', btnHandler) 
}

export default popUp
