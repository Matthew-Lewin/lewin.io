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

domHandler('.sm-nav__button', '#sm-nav__list', 'sm-nav__opened')
