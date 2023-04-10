let sections = document.querySelectorAll('section')
let progress = document.querySelector('.progress h2')
let elements = document.querySelectorAll('.element')
let leftBtn = document.querySelector('.left-btn')
let rightBtn = document.querySelector('.right-btn')
let menuEl = document.querySelector('.menu')
let navbarEl = document.querySelector('.navbar')
let sectionWrapper = document.querySelectorAll('.section-wrapper')

let counter1 = 0
let counter2 = 1

handlePages()

function handleScroll() {
  if (counter1 < 0) {
    counter1 = sections.length - 1
    counter2 = sections.length

    Array.from(sections).forEach((section) => {
      section.style.left = '-100vw'

      if (sections[counter1]) {
        return
      }
    })
  } else if (counter1 >= sections.length) {
    Array.from(sections).forEach((section) => {
      section.style.left = '0'
    })

    counter1 = 0
    counter2 = 1
  }
}

function handlePages() {
  progress.textContent = `${counter2} / ${sections.length}`

  elements.forEach((element) => (element.style.backgroundColor = 'transparent'))

  document.querySelector(`.element-${counter2}`).style.backgroundColor = '#ddd'
}

function handleSection() {
  sectionWrapper.forEach((section) => (section.style.transform = 'scale(1.5)'))
}

window.addEventListener('wheel', (e) => {
  let deltaY = e.deltaY > 0

  if (deltaY) {
    counter1++
    counter2++

    document.querySelector(`.section-${counter1}`).style.left = '-100vw'

    handleScroll()

    handleSection()
    document.querySelector(`.section-${counter1 + 1}-wrapper`).style.transform =
      'scale(1)'

    handlePages()
  } else {
    counter1--
    counter2--

    handleScroll()
    handlePages()

    document.querySelector(`.section-${counter2}`).style.left = '0'

    handleSection()
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      'scale(1)'
  }
})

leftBtn.addEventListener('click', (e) => {
  counter1--
  counter2--

  handleScroll()
  handlePages()

  document.querySelector(`.section-${counter2}`).style.left = '0'

  handleSection()
  document.querySelector(`.section-${counter2}-wrapper`).style.transform =
    'scale(1)'
})

rightBtn.addEventListener('click', (e) => {
  counter1++
  counter2++

  document.querySelector(`.section-${counter1}`).style.left = '-100vw'

  handleScroll()

  handleSection()
  document.querySelector(`.section-${counter2}-wrapper`).style.transform =
    'scale(1)'

  handlePages()
})

document.querySelector('.grapes-img').addEventListener('mouseover', (e) => {
  document.querySelector('.section-3-wrapper').style.opacity = '0.7'
})

document.querySelector('.grapes-img').addEventListener('mouseout', (e) => {
  document.querySelector('.section-3-wrapper').style.opacity = '1'
})

menuEl.addEventListener('click', (e) => {
  navbarEl.classList.toggle('active')
})
