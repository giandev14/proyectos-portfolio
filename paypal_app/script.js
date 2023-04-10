//Pages
let logoEl = document.querySelectorAll('.logo')
let loginEl = document.querySelectorAll('.login')
let signupEl = document.querySelectorAll('.signup')
let frontPage = document.querySelector('.front-page')
let loginPage = document.querySelector('.login-page')
let signupPage = document.querySelector('.signup-page')

logoEl.forEach((logo) => {
  logo.addEventListener('click', (e) => {
    frontPage.style.display = 'block'
    loginPage.style.display = 'none'
    signupPage.style.display = 'none'
  })
})

loginEl.forEach((loginBtn) => {
  loginBtn.addEventListener('click', (e) => {
    frontPage.style.display = 'none'
    loginPage.style.display = 'block'
    signupPage.style.display = 'none'
  })
})

signupEl.forEach((signupBtn) => {
  signupBtn.addEventListener('click', (e) => {
    frontPage.style.display = 'none'
    loginPage.style.display = 'none'
    signupPage.style.display = 'flex'
  })
})
//Pages

//Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')
const navbarWrapper = document.querySelector('.navbar-wrapper')
let showDropdown = document.querySelectorAll('.show-dropdown')
let navDropdown = document.querySelectorAll('.nav-dropdown')
let dropdownLink = document.querySelectorAll('.dropdown-heading-link')

if (window.innerWidth < 1000) {
  let menuIcon = document.querySelector('.menu')
  let navbar = document.querySelector('.navbar')

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active')

    if (!navbar.classList.contains('active')) {
      navDropdown.forEach((dropdown) => (dropdown.style.left = '-20rem'))
    }
  })

  showDropdown.forEach((link) => {
    link.addEventListener('click', () => {
      link.nextElementSibling.style.left = '0'
    })
  })

  dropdownLink.forEach((link) => {
    link.addEventListener('click', () => {
      link.parentElement.parentElement.style.left = '-20rem'
    })
  })
} else {
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener('mouseover', (e) => {
      dropdownItem.lastElementChild.style.cssText =
        'opacity: 1; visibility: visible'

      navbarWrapper.style.background =
        'linear-gradient(to right, #066377, #2f8fdf, #066377)'

      dropdownItem.firstElementChild.firstElementChild.style.transform =
        'rotate(170deg)'
    })

    dropdownItem.addEventListener('mouseout', (e) => {
      dropdownItem.lastElementChild.style.cssText =
        'opacity: 0; visibility: hidden'

      navbarWrapper.style.background = 'none'

      dropdownItem.firstElementChild.firstElementChild.style.transform =
        'rotate(0)'
    })
  })
}

window.addEventListener('resize', (e) => window.location.reload())
//Navigation
