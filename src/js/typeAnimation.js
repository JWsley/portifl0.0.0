const sub = document.querySelector('#subtitulo');
const ion = document.querySelector('#ion');
const txt1 = document.querySelector('#text1');
const txt2 = document.querySelector('#text2');
const txt3 = document.querySelector('#text3');



setInterval(typeWriter(sub,200),2000)

const icon1 = document.querySelector('#c1');
const icon2 = document.querySelector('#c2');
const icon3 = document.querySelector('#c3');
const icon4 = document.querySelector('#c4');
const icon5 = document.querySelector('#c5');
const icon6 = document.querySelector('#c6');






window.addEventListener('scroll',()=>{

    position = window.scrollY;

    ion.style.transform = `rotate(${position*0.50}deg)`;

    if(position>700&& position<715){
        setInterval(typeWriter(txt1,50),3000);
        txt1.style.after = 'none';
 
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
            typeWriter(txt2,50)
            typeWriter(txt3,50)
        }, 8000);
        
    }
    console.log(position);
})


function typeWriter(element,time){
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra,i)=>{
        setTimeout(()=>{
            element.innerHTML += letra;
            console.log(i);
        },time*i);
   
    });
    console.log(textoArray);   
}
 