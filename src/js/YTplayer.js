export default class YTplayer {
  constructor() {
    YTplayer.getItems()
  }
  static getItems() {
    this.iframe = document.getElementById('ytv')
    this.videoSrc = this.iframe.getAttribute('data-src')
  }

  static startVideo() {
    this.getItems()
    this.iframe.setAttribute('src', this.videoSrc)
  }
  
  static stopVideo() {
    this.getItems()
    this.iframe.setAttribute('src', '')
  }
}





