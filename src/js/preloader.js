if (screen.width > 960) {
  let video = `<video poster="img/main-poster.jpg" autoplay="" muted="" loop="" style="margin: 0 auto; opacity:1; display:block; max-width: 100%">
      <source src="video/video.mp4" type="video/mp4"></video>`;
  document.querySelector('.header__video').innerHTML = video;
} else {
  let img = '<img src="img/main-poster.jpg" alt="Bali">';
  document.querySelector('.header__video').innerHTML = img;
}


window.addEventListener('load', function(e) {



  let load = () => {
    document.querySelector('.loader').style.opacity = 0;
    document.querySelector('.loader').style.pointerEvents = 'none';

  };
  load();
});

//     // показать прелоадер

// var img = new Image();

// img.src = 'image source';

// img.onload = function () {

//   // убрать прелоадер

// };
