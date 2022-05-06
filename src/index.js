import createJoke from './joke.js';
import './styles/main.scss';
import inception from './assets/inception2.jpg';

const testImg = document.getElementById('testImg');

testImg.src = inception;

console.log(createJoke());
console.log(1);