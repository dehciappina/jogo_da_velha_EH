var campo = document.querySelectorAll('.jogo_da_velha article div')
let i = 0;
contador = 0

let jogoFinalizado = document.querySelector('.end_message')

let jogoVencido = document.querySelector('.win_message')

function preencherCampo() {

    if(contador < 9) {
        if(this.querySelector('p').innerHTML == "") {

            contador++
            i++;
    
            if(i % 2) {
                this.querySelector('p').innerHTML = "X"
            } else {
                this.querySelector('p').innerHTML = "O"
            }

            if (contador >= 5) {
                verificar()
            }
            
        }

        console.log(contador)
    } else {
        jogoFinalizado.classList.add('end_message_appear')

        setTimeout(function() {
            jogoFinalizado.classList.remove('end_message_appear')
        }, 5000)
    }
}

for(subcampo in campo) {
    campo[subcampo].addEventListener('click', preencherCampo)
}

function comparar(casa1, casa2, casa3) {
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML && casa1.innerHTML !== "") {
        return true;
    } else {
        return false;
    }
}

function verificar() {
    if (
        comparar(campo[0].querySelector('p'), campo[1].querySelector('p'), campo[2].querySelector('p'))
    || 
        comparar(campo[3].querySelector('p'), campo[4].querySelector('p'), campo[5].querySelector('p'))
    || 
        comparar(campo[6].querySelector('p'), campo[7].querySelector('p'), campo[8].querySelector('p'))
    ||
        comparar(campo[0].querySelector('p'), campo[3].querySelector('p'), campo[6].querySelector('p'))
    ||
        comparar(campo[1].querySelector('p'), campo[4].querySelector('p'), campo[7].querySelector('p'))
    ||
        comparar(campo[2].querySelector('p'), campo[5].querySelector('p'), campo[8].querySelector('p'))
    ||
        comparar(campo[0].querySelector('p'), campo[4].querySelector('p'), campo[8].querySelector('p'))
    ||
        comparar(campo[2].querySelector('p'), campo[4].querySelector('p'), campo[6].querySelector('p'))

    ) {
        jogoVencido.classList.add('win_message_appear')
    }
    else if(contador === 9){
        jogoFinalizado.classList.add('end_message_appear')

        setTimeout(function() {
            jogoFinalizado.classList.remove('end_message_appear')
        }, 5000)
    }
}