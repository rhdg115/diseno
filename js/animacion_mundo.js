var animacion = lottie.loadAnimation({
    container: document.getElementById('icono_mundo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/mundo.json',
})

btn = document.getElementById('icono_mundo');
btn.addEventListener('click',function(){
    animacion.play();
})