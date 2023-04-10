const container = document.querySelector('.container')
const menuEl = document.querySelector('.hamburger-menu')

menuEl.addEventListener('click', (e) => {
  container.classList.toggle('active')
})
