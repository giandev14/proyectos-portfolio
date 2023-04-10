document.querySelectorAll('.watch-control, .elements a').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
  })
})

/* Element */
let element = document.querySelector('.cube')
let topXElement = document.querySelector('.top-x-element')
let bottomXElement = document.querySelector('.bottom-x-element')
let leftYElement = document.querySelector('.left-y-element')
let rightYElement = document.querySelector('.right-y-element')
let topZelement = document.querySelector('.top-z-element')
let bottomZelement = document.querySelector('.bottom-z-element')
let elements = document.querySelector('.elements')

let x = 0
let y = 0
let z = 0
let bool = true
let interval

topXElement.addEventListener('click', (e) => {
  element.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

bottomXElement.addEventListener('click', (e) => {
  element.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

leftYElement.addEventListener('click', (e) => {
  element.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`
})

rightYElement.addEventListener('click', (e) => {
  element.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg rotateZ(${z}deg)`
})

topZelement.addEventListener('click', (e) => {
  element.style.transform = `rotateX(${x}deg) rotateY(${y}deg rotateZ(${(z -= 20)}deg)`
})

bottomZelement.addEventListener('click', (e) => {
  element.style.transform = `rotateX(${x}deg) rotateY(${y}deg rotateZ(${(z += 20)}deg)`
})

let playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      element.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
    }, 100)
  } else {
    clearInterval(interval)
  }
}

element.addEventListener('mouseover', (e) => {
  bool = false

  playPause()
})

element.addEventListener('mouseout', (e) => {
  bool = true

  playPause()
})

playPause()
/* Element */

/* Slideshow */
const slideShowEl = document.querySelector('.slideshow')

let i = 1

const slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    let div = document.createElement('div')

    div.style.backgroundImage = `url('images/slideshow/section-1-bg-${i}.jpg')`

    if (i === 1) {
      div.classList.add('active')
    }

    slideShowEl.appendChild(div)
  }
}

slideShowDivs()

const divs = document.querySelectorAll('.slideshow div')

const slideShow = () => {
  setInterval(function () {
    i++

    let div = document.querySelector('.slideshow .active')

    div.classList.remove('active')

    if (i < divs.length) {
      div.nextElementSibling.classList.add('active')
    } else {
      divs[0].classList.add('active')
      i = 1
    }
  }, 10000)
}

slideShow()
/* Slideshow */

/* Section 3 */
let sectionContent = document.querySelector('.section-3-content')

window.addEventListener('scroll', (e) => {
  /* 
    offsetTop: Determina la distancia que hay entre la app hasta la parte top del elemento

    Si se llega a la mitad del section se realiza esto
    */
  if (
    window.scrollY + window.innerHeight >=
    sectionContent.offsetTop + sectionContent.offsetHeight / 2
  ) {
    sectionContent.classList.add('active')
  } else {
    sectionContent.classList.remove('active')
  }
})

/* Section 4 */
let watchB = document.querySelector('.watch-b')
let watchCases = document.querySelector('.watch-cases')

let watchTopControl = document.querySelector('.watch-top-control')
let watchRightControl = document.querySelector('.watch-right-control')
let watchBottomControl = document.querySelector('.watch-bottom-control')
let watchLeftControl = document.querySelector('.watch-left-control')

let axisX = 0
let axisY = 0

const hideElement = () => {
  if (axisY === -240) {
    watchTopControl.classList.add('hide')
  } else {
    watchTopControl.classList.remove('hide')
  }

  if (axisY === 240) {
    watchBottomControl.classList.add('hide')
  } else {
    watchBottomControl.classList.remove('hide')
  }

  if (axisX === -240) {
    watchLeftControl.classList.add('hide')
  } else {
    watchLeftControl.classList.remove('hide')
  }

  if (axisX === 240) {
    watchRightControl.classList.add('hide')
  } else {
    watchRightControl.classList.remove('hide')
  }
}

watchTopControl.addEventListener('click', (e) => {
  watchCases.style.marginTop = `${(axisY -= 60)}rem`

  hideElement()
})

watchBottomControl.addEventListener('click', (e) => {
  watchCases.style.marginTop = `${(axisY += 60)}rem`

  hideElement()
})

watchRightControl.addEventListener('click', (e) => {
  watchB.style.marginRight = `${(axisX += 60)}rem`

  hideElement()
})

watchLeftControl.addEventListener('click', (e) => {
  watchB.style.marginRight = `${(axisX -= 60)}rem`

  hideElement()
})
