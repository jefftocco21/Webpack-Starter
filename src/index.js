// DEMO JOKE APP
import createJoke from './createJoke'
import './styles/main.scss'
import laughing from './assets/inception2.jpg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', createJoke)

createJoke()