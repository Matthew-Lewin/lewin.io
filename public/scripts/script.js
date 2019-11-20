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

// let toggleText = (trigger, target, content) => {
//   console.log(content)
//   let element1 = document.querySelector(trigger)
//   let element2 = document.querySelector(target)
//   let initialText = target.textContent

//   console.log('do you feel it mister crabs?')
//   element1.addEventListener('click', () => {
//     if (element2.textContent === initialText) {
//       element2.textContent = content
//     } else {
//       element2.textContent = initialText
//     }
//   })
// }

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
let menuHandler = toggleText(
  '.sm-nav__button',
  '.sm-nav__button',
  'Close'
)
