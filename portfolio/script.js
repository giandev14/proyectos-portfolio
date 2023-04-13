let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let header = document.querySelector('header')
let progressPercent = document.querySelectorAll('.progress-percent')
let navbar = document.querySelector('.navbar')
let menuIcon = document.querySelector('.menu-icon')

window.addEventListener('scroll', (e) => {
  /* Highlight Link on Scroll */
  sections.forEach((section, idx) => {
    if (window.scrollY >= section.offsetTop - 110) {
      removeActiveLinks()

      navLinks[idx].classList.add('active')
    }
  })

  /* Sticky Navbar */
  header.classList.toggle('sticky', window.scrollY > 300)

  /* Progress Percent */
  progressPercent.forEach((progress) => {
    if (window.scrollY >= progress.offsetTop + 1200) {
      let attr = progress.getAttribute('data-percent')

      progress.style.width = `${attr}%`
    } else {
      progress.style.width = `0%`
    }
  })
})

function removeActiveLinks() {
  navLinks.forEach((navLink) => navLink.classList.remove('active'))
}

/* Responsive Navbar */
menuIcon.addEventListener('click', (e) => navbar.classList.toggle('active'))

/* Scroll Reveal */
ScrollReveal({
  duration: 2000,
  delay: 200,
  distance: '200px',
})

ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.hero-img, .projects-wrapper', {
  origin: 'bottom',
})
ScrollReveal().reveal('.hero-content h1, .about-box-1', { origin: 'left' })
ScrollReveal().reveal('.hero-content p, .about-box-2', { origin: 'right' })

/* Typed Js */
let typed = new Typed('.animated', {
  strings: ['Frontend Developer', 'Software Engineer', 'JS Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})
