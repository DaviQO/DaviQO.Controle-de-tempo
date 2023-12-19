function ativarContagem() {

tempo = setInterval(function () {
    let cronometro = document.getElementById('tempo').innerHTML;
    let soma = parseInt(cronometro) + 1;

    if (soma === 0){
        document.getElementById('tempo').innerHTML = "Tempo esgotado";
        pararContagem()
    }

    document.getElementById('tempo').innerHTML = soma;
    }, 1000)
}

function pararContagem() {
    clearInterval(tempo);
}