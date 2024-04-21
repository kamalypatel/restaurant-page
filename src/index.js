import './normalize.css'
import './styles.css'

const content = document.querySelector('#content')

content.classList.add('content')

const navBar = document.createElement('nav')

navBar.classList.add('navBar')

const logoName = document.createElement('p')

logoName.innerText = "Daniela's"
logoName.classList.add('logoName')

navBar.appendChild(logoName)

const navButtons = document.createElement('div')
navButtons.classList.add('navButtons')

for (let i = 1; i <= 3; i++) {
    const navButton = document.createElement('button')

    navButton.setAttribute('type', 'button')
    navButton.classList.add('navButton')
    if (i == 1) {
        navButton.innerText = 'Home'
    } else if (i == 2) {
        navButton.innerText = 'Menu'
    } else {
        navButton.innerText = 'About'
    }
    navButtons.appendChild(navButton)
}

navBar.appendChild(navButtons)
content.appendChild(navBar)

const hero = document.createElement('div')

hero.classList.add('hero')

const heroText = document.createElement('p')

heroText.innerText = 'Welcome to Dining Excellence'

heroText.classList.add('heroText')

hero.appendChild(heroText)

content.appendChild(hero)

const description = document.createElement('p')

description.innerText = 'We are bringing you fine dining in a romantic setting within the Elmwood Village. Sit down with our world class Italian cuisine, enjoy our stellar beverage program, and finish with our 5-Star Gelato.'

description.classList.add('description')

content.appendChild(description)