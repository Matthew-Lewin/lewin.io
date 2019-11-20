console.log('get fucked 🔥')

// Function that controls adding and removing styles
let domHandler = (trigger, target, className) => {
  console.log('#triggered')
  const element1 = document.querySelector(trigger)
  const element2 = document.querySelector(target)
  element1.addEventListener('click', () => {
    element2.classList.toggle(className)
  })
}

let menuToggle = (element, focusTarget) => {
  let el = document.querySelector(element)
  el.addEventListener('click', () => {
    if (el.textContent == 'Menu') {
      el.textContent = 'Close'
    } else {
      el.textContent = 'Menu'
    }
    document.querySelector(focusTarget).focus()
  })
}

menuToggle('.sm-nav__button', '#first_link')

domHandler('.sm-nav__button', '#sm-nav__list', 'sm-nav__opened')
domHandler('#about', '.about-text', 'about-text--active')
let menuHandler = toggleText(
  '.sm-nav__button',
  '.sm-nav__button',
  'Close'
)
