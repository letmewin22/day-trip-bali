import pseudoPrototype from '../lib/pseudo.prototype.js'

export default class FormInputs {

  constructor() {

    this.input = document.querySelectorAll('.input-wrapper .text-field'),
    this.form = document.querySelector('form'),
    this.review = document.getElementById('review'),
    this.validateText = document.querySelectorAll('.form-validate-text'),
    this.formButton = document.querySelector('.form .button'),
    this.label = document.querySelectorAll('.label'),
    this.thislabel = document.querySelectorAll('.label')[1]

    this.formPopUpEvents()
    this.focus()
    this.blur()
    this.reset()
    // this.submit()

  }

  formPopUpEvents() {

    if (this.formPopUp) {
      const popUp = () => {
        this.formPopUp.style.opacity = '1'
        this.formPopUp.style.pointerEvents = 'auto'
      }

      const closePopUp = () => {
        this.formPopUp.style.opacity = '0'
        this.formPopUp.style.pointerEvents = 'none'
      }

      this.popUpButton.addEventListener('click', popUp)
      this.popUpClose.addEventListener('click', closePopUp)
    }
  }

  focus() {

    let that = this

    function focus() {
      this.classList.add('focus')
      document.body.classList.add('form-focused')
    }

    for (let input of that.input) {
      input.addEventListener('focus', focus)
    }
  }

  blur() {

    let that = this

    function blur() {
      if (this.value === '') {
        this.classList.remove('focus')
        document.body.classList.remove('form-focused')
      }
    }

    for (let input of that.input) {
      input.addEventListener('blur', blur)
    }
  }

  reset() {

    document.body.onmousedown = () => {
      for (let text of this.validateText) {
        text.style.opacity = '0'
      }
      
      this.thislabel.classList = 'label'
    }
    
    this.review.oninput = () => {
      this.validateText.style.opacity = '0'
      // this.thislabel.pseudoStyle().classList = 'label'
    }
  }


}
