//For responsive view
const toggleButtons = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButtons.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButtons.classList.toggle('active')
})

//Parallax Scroll
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainbehind = document.getElementById('mountains-behind');
let txt = document.getElementById('text');
let btn = document.getElementById('btn');
let mountainfront = document.getElementById('mountains-front');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainbehind.style.top = value * 0.5 + 'px';
    mountainfront.style.top = value * 0 + 'px';
    txt.style.marginRight = value * 4 + 'px';
    txt.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';   
})