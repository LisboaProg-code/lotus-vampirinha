let intervalo1
let intervalo2

function abrir(){
    let paper = document.getElementById("papel")
    let triangulo = document.getElementById("cima")
    let imagem = document.getElementById("img")
    let button = document.getElementById("buttons")

    function criarCoracao() {
        const coracao = document.createElement('img');
        coracao.className = 'coracao';
        coracao.src = 'lotus.png';
        coracao.alt = 'Coração'; 
    
        const posX = Math.random() * window.innerWidth;
        coracao.style.left = `${posX}px`;
        coracao.style.width = '150px'; 
        coracao.style.height = '90px'; 
    
        document.getElementById('hearts-container').appendChild(coracao);
    
        coracao.addEventListener('animationend', () => {
            coracao.remove();
        });
    }
    
    intervalo1 = setInterval(criarCoracao, 500);

    function criarCoracao2() {
        const coracao2 = document.createElement('div');
        coracao2.className = 'coracao';
        coracao2.textContent = '🖤'; 
    
        const posX = Math.random() * window.innerWidth;
        coracao2.style.left = `${posX}px`;
        coracao2.style.fontSize = '20px';
    
        document.getElementById('hearts-container').appendChild(coracao2);
    
        coracao2.addEventListener('animationend', () => {
            coracao2.remove();
        });
    }
    
    intervalo2 = setInterval(criarCoracao2, 600);
    
    paper.style.display = 'block'

    triangulo.style.borderTop = '0'
    triangulo.style.borderBottom = '120px solid #F581A4'
    triangulo.style.transform = 'translate(0%, -100%)'
    triangulo.style.zIndex = '1'
    triangulo.style.transition = 'all .5s ease'

    function animarCarta(){
        setTimeout(() => {
            paper.style.transform = 'translateY(-60px)'; 
            paper.style.transition = 'transform .3s ease'
        }, 1000);

        setTimeout(() => {
            paper.style.transform = 'translateY(-80px)'; 
            paper.style.transition = 'transform .3s ease'
            paper.style.height = '220px'
        }, 2000);

        setTimeout(() => {
            paper.style.transform = 'translateY(-130px)'
            paper.style.transition = 'transform .3s ease'
        }, 3000)
    }

    animarCarta()

    const musica = document.getElementById("background-music")

    musica.play().catch(error => {
            console.log('A reprodução automática foi bloqueada. O usuário deve interagir com a página primeiro.');
        });
}

function fechar(){
    let paper = document.getElementById("papel")
    let triangulo = document.getElementById("cima")
    let envelope = document.getElementById("envelope")
    triangulo.style.transition = 'border-top 0.5s ease, border-bottom 0.5s ease';

    function animarCarta(){
    setTimeout(() => {
        paper.style.transform = 'translateY(10px)'; 
        paper.style.transition = 'transform .3s ease'
        paper.style.height = '170px'
    }, 1000);

    setTimeout(() => {
        paper.style.transform = 'translateY(20px)'; 
        paper.style.transition = 'transform .3s ease'
    }, 2000);

    setTimeout(() => {
        paper.style.transform = 'translateY(20px)'
        paper.style.transition = 'transform .3s ease'
        paper.style.display = 'none'
        triangulo.style.borderTop = '100px'
        triangulo.style.borderBottom = '0px'
        triangulo.style.transform = 'translate(0%, 0%)'
        triangulo.style.transition = 'all .5s ease'
        envelope.style.backgroundColor = '#F27398'
        const heartsContainer = document.getElementById('hearts-container');
        while (heartsContainer.firstChild) {
            heartsContainer.removeChild(heartsContainer.firstChild);
        }
    }, 3000)
}

    animarCarta()
    clearInterval(intervalo1)
    clearInterval(intervalo2)
}

window.onload = function() {
    const music = document.getElementById('background-music');
    music.play().catch(error => {
        console.log('A reprodução automática foi bloqueada. O usuário deve interagir com a página primeiro.');
    });
};
