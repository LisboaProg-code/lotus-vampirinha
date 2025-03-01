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


    function animarCarta(){
        // Primeiro movimento: subir um pouco
        setTimeout(() => {
            paper.style.transform = 'translateY(-20px)'; 
        }, 1000);

        // Segundo movimento: subir mais um pouco
        setTimeout(() => {
            paper.style.transform = 'translateY(-50px)'; 
        }, 2000);

        setTimeout(() => {
            paper.style.transform = 'translateY(-70px)'
        }, 3000)
    }

    animarCarta()

}