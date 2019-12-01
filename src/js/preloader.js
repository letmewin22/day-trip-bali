let video = `<video poster="img/main-poster.jpg" autoplay="" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%">
      <source src="video/video.mp4" type="video/mp4"></video>`;
let videoMob = `<video poster="img/main-poster.jpg" preload="metadata" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%" webkit-playsinline playsinline>
      <source src="video/video.mp4" type="video/mp4"></video> <div class="video-btn"><img src="video/video-button.svg" alt="play button"></div>`;

let videoWrap = document.querySelector('.header__video');
screen.width > 960 ? videoWrap.innerHTML = video : videoWrap.innerHTML = videoMob;

let videoHTML, videoBtn;



window.onload = (e) => {

  let load = () => {
    document.querySelector('.loader').style.opacity = 0;
    document.querySelector('.loader').style.pointerEvents = 'none';

  };
  load();

  videoHTML = videoWrap.querySelector('video');
  videoBtn = document.querySelector('.video-btn');
  if (videoBtn) {
    videoHTML.onclick = () => {
      if (videoHTML.paused === true) {
        videoHTML.play();
        videoBtn.style.opacity = 0;
      } else {
        videoHTML.pause();
        videoBtn.style.opacity = 10;
      }


    };
  }

};

//     // показать прелоадер

// var img = new Image();

// img.src = 'image source';

// img.onload = function () {

//   // убрать прелоадер

// };
