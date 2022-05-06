import createJoke from './joke.js';
import './styles/main.scss';
import inception from './assets/inception2.jpg';

const testImg = document.getElementById('testImg');

testImg.src = inception;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', createJoke);


createJoke();