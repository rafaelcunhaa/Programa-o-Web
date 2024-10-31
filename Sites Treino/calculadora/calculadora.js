function setNumero(x) {
    var display = document.getElementById("display");
    display.value += x;
}

function setIgual() {
    var display = document.getElementById("display");
    var resultado = eval(display.value);
    display.value = resultado;
}

function setLimpar() {
    document.getElementById("display").value = "";
}

function setAcao(x) {
    var display = document.getElementById("display");
    var valorAtual = display.value;

    // Verifica se já existe um resultado e adiciona a operação
    if (valorAtual !== "" && !isNaN(valorAtual.slice(-1))) {
        display.value = eval(valorAtual) + x;
    } else if (valorAtual !== "") {
        // Se já tem uma operação, substitui pela nova
        display.value = valorAtual.slice(0, -1) + x;
    } else {
        display.value += x;
    }
}
