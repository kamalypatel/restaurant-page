import './normalize.css'
import './styles.css'

function createNavBar() {
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
}

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

    content.classList.add('content')

    const hero = document.createElement('div')

    hero.classList.add('menuHero')

    const heroText = document.createElement('p')

    heroText.innerText = 'Excellent Menu that is rated 5-Stars'

    heroText.classList.add('heroText')

    hero.appendChild(heroText)

    content.appendChild(hero)

    const description = document.createElement('h2')

    description.innerText = 'Dining Menu'

    description.classList.add('description')

    content.appendChild(description)

    const menuItemPasta = document.createElement('div')
    menuItemPasta.classList.add('menuItem')
    const menuItemPastaLabel = document.createElement('p')
    menuItemPastaLabel.innerText = 'Pasta'
    const menuItemPastaPrice = document.createElement('p')
    menuItemPastaPrice.innerText = '$26'
    menuItemPasta.appendChild(menuItemPastaLabel)
    menuItemPasta.appendChild(menuItemPastaPrice)
    content.appendChild(menuItemPasta)

    const menuItemPizza = document.createElement('div')
    menuItemPizza.classList.add('menuItem')
    const menuItemPizzaLabel = document.createElement('p')
    menuItemPizzaLabel.innerText = 'Pizza'
    const menuItemPizzaPrice = document.createElement('p')
    menuItemPizzaPrice.innerText = '$19'
    menuItemPizza.appendChild(menuItemPizzaLabel)
    menuItemPizza.appendChild(menuItemPizzaPrice)
    content.appendChild(menuItemPizza)

    const menuItemDesert = document.createElement('div')
    menuItemDesert.classList.add('menuItem')
    const menuItemDesertLabel = document.createElement('p')
    menuItemDesertLabel.innerText = 'Chocolate Sundae'
    const menuItemDesertPrice = document.createElement('p')
    menuItemDesertPrice.innerText = '$12'
    menuItemDesert.appendChild(menuItemDesertLabel)
    menuItemDesert.appendChild(menuItemDesertPrice)
    content.appendChild(menuItemDesert)
}

function aboutPage() {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    content.classList.add('content')

    const hero = document.createElement('div')

    hero.classList.add('aboutHero')

    const heroText = document.createElement('p')

    heroText.innerText = 'Our Founding Story'

    heroText.classList.add('heroText')

    hero.appendChild(heroText)

    content.appendChild(hero)

    const description = document.createElement('p')

    description.innerText = 'The restaurant started in 2015 when a vision came to me in my dreams. The Kool Aid man ran through a brick wall and instead of saying his trademark OH YEAH, he said to me, follow your dreams. And since becoming an astronaut was out of the question, starting a restaurant became my goal!'

    description.classList.add('description')

    content.appendChild(description)
}

createNavBar()
homePage()
