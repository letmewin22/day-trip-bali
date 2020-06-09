// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player
export function onYouTubeIframeAPIReady() {
  window.YT.ready(function() {
    player = new YT.Player('pop-up-video', {
      height: '100%',
      width: '100%',
      videoId: 'uz7eboY2YJs'
    })
  })
}

export function stopVideo() {
  player.stopVideo()
}

