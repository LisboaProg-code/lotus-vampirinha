function abrir(){
    let paper = document.getElementById("papel")
    let triangulo = document.getElementById("cima")
    let imagem = document.getElementById("img")
    let button = document.getElementById("buttons")

    
    paper.style.display = 'block'
    button.style.padding = '25px'

    triangulo.style.borderTop = '0'
    triangulo.style.borderBottom = '120px solid #F581A4'
    triangulo.style.transform = 'translate(0%, -100%)'
    triangulo.style.zIndex = '1'
    triangulo.style.transition = 'all .5s ease'

    function criarCoracao() {
        const coracao = document.createElement('img');
        coracao.className = 'coracao';
        coracao.src = 'lotus.png';
        coracao.alt = 'Coração'; 
    
        // Posição aleatória na horizontal
        const posX = Math.random() * window.innerWidth;
        coracao.style.left = `${posX}px`;
        coracao.style.width = '150px'; 
        coracao.style.height = '90px'; 
    
        // Adiciona o coração ao contêiner
        document.getElementById('hearts-container').appendChild(coracao);
    
        // Remove o coração após a animação
        coracao.addEventListener('animationend', () => {
            coracao.remove();
        });
    }
    
    // Cria um coração a cada 500ms
    setInterval(criarCoracao, 500);

    function criarCoracao2() {
        const coracao2 = document.createElement('div');
        coracao2.className = 'coracao';
        coracao2.textContent = '🖤'; // Use o emoji de coração
    
        // Posição aleatória na horizontal
        const posX = Math.random() * window.innerWidth;
        coracao2.style.left = `${posX}px`;
        coracao2.style.fontSize = '20px'; // Ajuste o tamanho do emoji conforme necessário
    
        // Adiciona o coração ao contêiner
        document.getElementById('hearts-container').appendChild(coracao2);
    
        // Remove o coração após a animação
        coracao2.addEventListener('animationend', () => {
            coracao2.remove();
        });
    }
    
    // Cria um coração a cada 500ms
    setInterval(criarCoracao2, 600);

    function animarCarta(){
        // Primeiro movimento: subir um pouco
        setTimeout(() => {
            paper.style.transform = 'translateY(-20px)'; 
            paper.style.transition = 'transform .3s ease'
        }, 1000);

        // Segundo movimento: subir mais um pouco
        setTimeout(() => {
            paper.style.transform = 'translateY(-50px)'; 
            paper.style.transition = 'transform .3s ease'
        }, 2000);

        setTimeout(() => {
            paper.style.transform = 'translateY(-70px)'
            paper.style.transition = 'transform .3s ease'
        }, 3000)
    }

    animarCarta()


}

function fechar(){
    let paper = document.getElementById("papel")
    let triangulo = document.getElementById("cima")
    let envelope = document.getElementById("envelope")
    triangulo.style.transition = 'border-top 0.5s ease, border-bottom 0.5s ease';

    function animarCarta(){
    // Primeiro movimento: subir um pouco
    setTimeout(() => {
        paper.style.transform = 'translateY(10px)'; 
        paper.style.transition = 'transform .3s ease'
    }, 1000);

    // Segundo movimento: subir mais um pouco
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
}