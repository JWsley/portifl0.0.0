const bodY = document.querySelector('#area');
const cursor = document.querySelector('#cursor');
const container = document.querySelector('#skillcont');

document.addEventListener('mousemove', function(event) {
  const position = bodY.getBoundingClientRect();

  let x = event.clientY - position.top;
  let y = event.clientX - position.left;

  let newposition = `top:${x}px;left:${y}px;`;

  cursor.setAttribute('style', newposition);
});

