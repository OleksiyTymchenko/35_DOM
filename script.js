"use strict;"

// document.write('Hello world');
// document.title = ' Alex best!!!'
// let h1 = document.getElementsByClassName('main-title');
// let h2 = document.getElementById('title');
// let p2 = document.getElementsByTagName('h1');
// console.log(h2);

// const $title = document.getElementById('list');
//  $title = 'Hello Alex';


// const textParaph = document.getElementById('title');
// textParaph.innerHTML = '<h1><span class="jack">Alex</span> you did it.</h1>'
// console.log(copy);

const menuButton = document.getElementById('name');
const menuName = document.getElementById('title');

menuButton.addEventListener('click', () => {
    menuName.classList.toggle('close');
})