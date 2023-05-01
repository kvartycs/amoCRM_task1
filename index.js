const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let inter = setInterval(() => {
      let sec = seconds % 60
      sec = sec < 10 ? '0' + sec : sec
      let minutes = Math.floor((seconds / 60) % 60)
      minutes = minutes < 10 ? '0' + minutes : minutes
      let hours = Math.floor((seconds / 3600) % 60)
      hours = hours < 10 ? '0' + hours : hours
      timerEl.innerHTML = `${hours}:${minutes}:${sec}`
      if (seconds === 0) {
        console.log('END')
        clearInterval(inter)
      }
      seconds--
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  if (!numbers.includes(e.data)) {
    inputEl.value = inputEl.value.replace(e.data, '')
  }

  // Очистите input так, чтобы в значении
  // оставались только числа
})

buttonEl.addEventListener('click', () => {
  console.log({ inputEl })
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})
