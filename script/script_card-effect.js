// This is a vanilla js version of this pen:
// https://codepen.io/andymerskin/pen/XNMWvQ

// This verison is mobile supported

const card = document.querySelector('.card-featured');
const cardbg = document.querySelector('.card_bg-one');

const cardWidth = card.offsetWidth;
const cardHeight = card.offsetHeight;

let mouseLeaveDelay = null;
let mouseX, mouseY;
mouseX = mouseY = 0;

card.addEventListener('mousemove', handleMouseMove);
card.addEventListener('mouseleave', handleMouseLeave);
card.addEventListener('mouseenter', handleMouseEnter);

card.addEventListener('touchmove', handleTouchMove);
card.addEventListener('touchstart', handleTouchStart);
card.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(e) {
    e.preventDefault();
    card.classList.add('hover_effect');
    clearTimeout(mouseLeaveDelay);
}
function handleTouchMove(e) {
    e.preventDefault();
    console.log('touch move triggered')
    mouseX = e.pageX - this.offsetLeft - cardWidth/2;
    mouseY = e.pageY - this.offsetTop - cardHeight/2;
    changeStyle(mouseX, mouseY);
}
function handleTouchEnd(e) {
    e.preventDefault();
    card.classList.remove('hover_effect');
    mouseLeaveDelay = setTimeout(() => {
        mouseX = 0;
        mouseY = 0;
        changeStyle(mouseX, mouseY);
    }, 500)
    console.log('touch end triggered')
}

function handleMouseMove(e) {
    console.log('mouse move triggered');
    mouseX = e.pageX - this.offsetLeft - cardWidth/2;
    mouseY = e.pageY - this.offsetTop - cardHeight/2;
    changeStyle(mouseX, mouseY);
}

function handleMouseLeave() {
    card.classList.remove('hover_effect');
    mouseLeaveDelay = setTimeout(() => {
        mouseX = 0;
        mouseY = 0;
        changeStyle(mouseX, mouseY);
    }, 500)
}

function handleMouseEnter() {
    card.classList.add('hover_effect');
    clearTimeout(mouseLeaveDelay);
}

function changeStyle(mouseX, mouseY) {
    mousePX = mouseX / cardWidth;
    mousePY = mouseY / cardHeight;
    const rX = mousePX * 30;
    const rY = mousePY * -30;
    const tX = mousePX * -40;
    const tY = mousePY * -40;
    card.style.transform = `rotateX(${rY}deg) rotateY(${rX}deg)`;
    cardbg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
}