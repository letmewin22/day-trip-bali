const Rate = () => {

  const rate = document.querySelectorAll('[data-rate]')
  for (let i = 0; i < rate.length; i++) {
    const rateNum = +rate[i].getAttribute('data-rate')
    const starts = rate[i].querySelectorAll('.reviews-rate svg')
    for (let i = 0; i < rateNum; i++) {
      starts[i].classList.add('active')
    }
  }
}

export default Rate
