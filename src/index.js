import './normalize.css'
import './styles.css'

function homePage() {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    content.classList.add('content')

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
}

function menuPage() {
    const content = document.querySelector('.content')
    content.innerHTML = ''
}

function aboutPage() {
    const content = document.querySelector('.content')
    content.innerHTML = ''

}



const header = document.querySelector('.header')
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
        navButton.addEventListener('click', homePage)
    } else if (i == 2) {
        navButton.innerText = 'Menu'
        navButton.addEventListener('click', menuPage)
    } else {
        navButton.innerText = 'About'
        navButton.addEventListener('click', aboutPage)
    }
    navButtons.appendChild(navButton)
}
navBar.appendChild(navButtons)
header.appendChild(navBar)

homePage()
