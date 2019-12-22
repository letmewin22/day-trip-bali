import { TimelineMax } from 'gsap'
const charming = require('charming')
// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting'

const MainLoader = () => {

  let video = `<video poster="img/main-poster-pc.jpg" autoplay="" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%">
      <source src="video/video.mp4" type="video/mp4"></video>`
  let videoMob = `<video poster="img/main-poster.jpg" preload="metadata" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%" webkit-playsinline playsinline>
      <source src="video/video.mp4" type="video/mp4"></video> <div class="video-btn"><img src="video/video-button.svg" alt="play button"></div>`

  let videoWrap = document.querySelector('.header__video')
  screen.width > 960 ? videoWrap.innerHTML = video : videoWrap.innerHTML = videoMob

  let videoHTML, videoBtn



  window.onload = (e) => {

    let load = () => {
      document.querySelector('.loader').style.opacity = 0
      document.querySelector('.loader').style.pointerEvents = 'none'

    }
    load()

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

  }

  const loading = () => {

    const target = document.querySelector('h1')
    const results = Splitting({ target: target, by: 'lines' })
    const target2 = document.querySelectorAll('h2')
    const results2 = Splitting({ target: target2, by: 'words' })

    let h1Splitter = [...document.querySelectorAll('h1 .word')]
    let h2Splitter = [...document.querySelectorAll('h2 span')]
    let h1 = document.querySelector('h1')
    let h1Desc = document.querySelector('.header__content__description')
    let video = document.querySelector('.header__video')
    let infoBlock = document.querySelector('.info-block')
    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < results[i].lines.length; j++) {
        for (let k = 0; k < results[i].lines[j].length; k++) {
          charming(results[i].lines[j][k])
          results[i].lines[j][k].classList.add('line', `line-${j}`)
          // results[i].lines[j][k].innerHTML = `<span class="line">${results[i].lines[j][k].innerHTML} + ${1}</span>`
        }
      }
    }
    // let arr = [...results[0].lines[1]];
    // console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //   charming(h1Splitter[i]);
    // }

    // for (let i = 0; i < h2Splitter.length; i++) {
    //   charming(h2Splitter[i])
    // }

    // let zjk = document.querySelectorAll('.line-0')
    // for (let i = 0; i < zjk.length; i++) {
    //   zjk.innerHTML = `<span class="line">${zjk[i].innerHTML}</span>`
    // }

    setTimeout(() => {
      // let ddd = [...target.querySelectorAll('.line-0')]
      // let ddd2 = [...target.querySelectorAll('.line-1')]
      // let dd3 = [...ddd, ...ddd2]
      // console.log(dd3)
      // for (let i = 0; i < ddd.length; i++) {

      //   for (let i = 0; i < h1Splitter[i].length; i++) {
      //     h1.style.opacity = '1'
      //     let splitterSpan = h1Splitter[i].querySelectorAll('span')
      //     let tl = new TimelineMax
      //     tl
      //       .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07)
      //   }
      // }
      for (let i = 0; i < results.length; i++) {
        for (let j = 0; j < results[i].lines.length; j++) {
          console.log(results[i].lines)
          h1.style.opacity = '1'
          let splitterSpan = h1.querySelectorAll('.line span')
          let tl = new TimelineMax
          tl
            .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07)
        }
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
