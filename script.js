const b = document.querySelector('button.btn2')
b.addEventListener('mouseover', moveHover)

function moveHover(){
    const i = Math.floor(Math.random()*500) + 1;
    const j = Math.floor(Math.random()*250) + 1;

    b.style.position = 'absolute';
    b.style.left =  i + 'px';
    b.style.top =  j + 'px';
}
