export default function Accordeon(item) {

  const accItem = document.querySelectorAll('.programm-item');
  setTimeout(() => {
  	accItem[0].classList.add('active');
  	accItem[0].style.maxHeight = accItem[0].scrollHeight + 'px';
    console.log(accItem[0].scrollHeight);
  }, 0);
  
  function accOpen() {
    let thisAccItem = this.querySelector('.programm-item');
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      thisAccItem.style.maxHeight = '30px';

    } else {
      for (let i = 0; i < accItem.length; i++) {
        accItem[i].classList.remove('active');
        accItem[i].style.maxHeight = '30px';
      }

      this.classList.add('active');
      thisAccItem.style.maxHeight = thisAccItem.scrollHeight + 'px';
    }

  }

  accItem.forEach((elem) => {
    elem.addEventListener('click', accOpen);
  });

}
