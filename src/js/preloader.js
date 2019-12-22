import { TimelineMax } from 'gsap'
const charming = require('charming')
// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting'

const MainLoader = () => {
  let videoWrap = document.querySelector('.header__video')
  const videoSrc = videoWrap.getAttribute('data-video-src')
  const posterPC = videoWrap.getAttribute('data-poster-pc')
  const posterMob = videoWrap.getAttribute('data-poster-mob')
  const mobBtn = videoWrap.getAttribute('data-mob-btn')
  let video = `<video poster="${posterPC}" autoplay="" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%">
      <source src="${videoSrc}" type="video/mp4"></video>`
  let videoMob = `<video poster="${posterMob}" preload="metadata" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%" webkit-playsinline playsinline>
      <source src="${videoSrc}" type="video/mp4"></video> <div class="video-btn"><img src="${mobBtn}" alt="play button"></div>`


  screen.width > 960 ? videoWrap.innerHTML = video : videoWrap.innerHTML = videoMob

  let videoHTML, videoBtn


  videoHTML = videoWrap.querySelector('video')
  videoBtn = document.querySelector('.video-btn')
  if (videoBtn) {
    videoHTML.onclick = () => {
      if (videoHTML.paused === true) {
        videoHTML.play()
        videoBtn.style.opacity = 0
      } else {
        videoHTML.pause()
        videoBtn.style.opacity = 10
      }


    }
  }


  const loading = () => {

    const target = document.querySelector('h1')
    const results = Splitting({ target: target, by: 'words' })
    const target2 = document.querySelectorAll('h2')
    const results2 = Splitting({ target: target2, by: 'words' })

    let h1Splitter = [...document.querySelectorAll('h1 span')]
    let h2Splitter = [...document.querySelectorAll('h2 span')]
    let h1 = document.querySelector('h1')
    let h1Desc = document.querySelector('.header__content__description')
    let video = document.querySelector('.header__video')
    let infoBlock = document.querySelector('.info-block')
    for (let i = 0; i < h1Splitter.length; i++) {
      charming(h1Splitter[i])
    }

    for (let i = 0; i < h2Splitter.length; i++) {
      charming(h2Splitter[i])
    }

    setTimeout(() => {
      for (let i = 0; i < h1Splitter.length; i++) {
        h1.style.opacity = '1'
        let splitterSpan = h1Splitter[i].querySelectorAll('span')
        let tl = new TimelineMax
        tl
          .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07)
      }
      let tl2 = new TimelineMax()
      tl2
        .to(h1Desc, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0)
        .to(video, 1.2, { opacity: 1, ease: Power2.easeOut }, 0.2)
        .to(infoBlock, 1.2, { opacity: 1, y: 0, ease: Power2.easeOut }, 0.7)
    }, 500)

  }
  loading()

}

export default MainLoader
