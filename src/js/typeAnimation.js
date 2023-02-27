const sub = document.querySelector('#subtitulo');

const txt1 = document.querySelector('#txt1');
const txt2 = document.querySelector('#txt2');
const txt3 = document.querySelector('#txt3');
const hr = document.querySelector('#hr');
const icon1 = document.querySelector('#c1');
const icon2 = document.querySelector('#c2');
const icon3 = document.querySelector('#c3');
const icon4 = document.querySelector('#c4');
const icon5 = document.querySelector('#c5');
const icon6 = document.querySelector('#c6');
var c = 0;

new TypeIt(sub, {
    strings: "Dev Aprendiz.",
    speed: 50,
    waitUntilVisible: true,
    loop:false,
  }).go();
   


  function startype(){

    
new TypeIt(txt1, {
    strings: "Além disso, já tive experiências com uma variedade de linguagens:",
    speed: 25,
    waitUntilVisible: true,
    loop:false,
  }).go();
        
  setInterval(() => {
    icon1.style.opacity = '1';
    
}, 3000);
setInterval(() => {
    icon2.style.opacity = '1';
    
}, 4000);
setInterval(() => {
    icon3.style.opacity = '1';
    
}, 5000);
setInterval(() => {
    icon4.style.opacity = '1';
    
}, 6000);
setInterval(() => {
    icon5.style.opacity = '1';
    
}, 7000);
setInterval(() => {
    icon6.style.opacity = '1';
    
    if(icon6.style.opacity == '1'){
        c=1;
        new TypeIt(txt2, {
            strings: "Também tenho conhecimento básico em desenvolvimento mobile utilizando ionic framework.",
            speed: 25,
            waitUntilVisible: true,
            loop:false,
          }).go();
    }
}, 8000);

  }

  




