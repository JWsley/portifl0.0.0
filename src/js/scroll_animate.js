AOS.init();
const ion = document.querySelector('#ion');

window.addEventListener('scroll',()=>{
    position = window.scrollY;

    ion.style.transform = `rotate(${position*0.50}deg)`;
})