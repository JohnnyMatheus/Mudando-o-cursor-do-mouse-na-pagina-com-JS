const html = document.querySelector('html');
html.style.cursor = 'none';
function seguirMouse(event){
    const x = event.x;
    const y= event.y;
    const circulo = document.querySelector('#circulo')
    circulo.style.width = '16px';
    circulo.style.height = '16px';
    circulo.style.backgroundColor = '#999';
    circulo.style.borderRadius = '50%';
    circulo.style.position = 'absolute';
    circulo.style.top = y + 'px';
    circulo.style.left = x + 'px';
}

window.addEventListener('mousemove',seguirMouse)

//código reduzido

const circulo2 = document.querySelector('#circulo2')
function seguirMouse2(event){
    circulo2.style.top = event.y + 'px';
    circulo2.style.left = event.x + 'px';
}
window.addEventListener('mousemove', seguirMouse2)
