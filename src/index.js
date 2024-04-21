import './normalize.css'
import './styles.css'

const content = document.querySelector('#content')

content.classList.add('content')

const navbar = document.createElement('nav')

navbar.classList.add('navbar')

for (let i = 1; i <= 3; i++) {
    const navbutton = document.createElement('button')

    navbutton.setAttribute('type', 'button')
    navbutton.classList.add('navbutton')
    if (i == 1) {
        navbutton.innerText = 'Home'
    } else if (i == 2) {
        navbutton.innerText = 'Menu'
    } else {
        navbutton.innerText = 'About'
    }
    navbar.appendChild(navbutton)
}

content.appendChild(navbar)

