function verificarNumPrimo() {
    document.getElementById("resultado").innerHTML = ""
    let num = Number(document.getElementById("num").value)
    if (num % 2 == 0) {
        document.getElementById("resultado").innerHTML += `<p> ${num} é divisível por 2</p>`
    }
    if (num % 3 == 0) {
        document.getElementById("resultado").innerHTML += `<p> ${num} é divisível por 3</p>`
    }
    if (num % 5 == 0) {
        document.getElementById("resultado").innerHTML += `<p> ${num} é divisível por 5</p>`
    }
    if (num % 7 == 0) {
        document.getElementById("resultado").innerHTML += `<p> ${num} é divisível por 7</p>`
    }
    if (
        (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0)
        ||
        (num == 2 || num == 3 || num == 5 || num == 7)
    ) {
        document.getElementById("resultado").innerHTML += "<p>é um número primo</p>"
    }
}

function verificarIdade() {
    document.getElementById("categoria").innerHTML = ""
    const idade = Number(document.getElementById("idade").value)
    if (isNaN(idade) || idade < 0) {
        resultado.textContent = " Por favor, insira uma idade válida";
    }
    else if (idade >= 6 && idade <= 11) {
        document.getElementById("categoria").innerHTML += ` ${idade} categoria infantil.`
    }
    else if (idade >= 12 && idade <= 17) {
        document.getElementById("categoria").innerHTML += ` ${idade} categoria juvenil.`
    }
    else if (idade >= 18 && idade <= 34) {
        document.getElementById("categoria").innerHTML += ` ${idade} categoria adulto.`
    }
    else {
        document.getElementById("categoria").innerHTML += ` O atleta não poderá competir`
    }
}

function verificarPoluição() {
    const indice = Number(document.getElementById('indice').value);
    const resultadoPolu = document.getElementById('resultadoPolu');

    if (isNaN(indice) || indice < 0) {
        resultadoPolu.textContent = " Insira um índice de poluição válido.";
    } 
    else if (indice > 50) {
        resultadoPolu.textContent = " Todos os grupos devem paralisarem suas atividades.";
    } 
    else if (indice > 40) {
        resultadoPolu.textContent = " Indústrias do 1º e 2º grupo devem suspenderem suas atividades.";
    } 
    else if (indice > 30) {
        resultadoPolu.textContent = " Indústria do 1º grupo deve suspender suas atividades.";
    } 
    else if (indice >= 5 && indice <= 30) {
        resultadoPolu.textContent = " Índice de poluição aceitável.";
    } 
    else {
        document.getElementById(resultadoPolu).innerText = " Índice fora do intervalo aceitável.";
    }
}

function verificarAposentadoria() {
    let codigo = document.getElementById('codigo').value;
    let anoNascimento = Number(document.getElementById('anoNascimento').value);
    let anoIngresso = Number(document.getElementById('anoIngresso').value);
    let resultadoApo = document.getElementById('resultadoApo');

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    let tempoTrabalho = anoAtual - anoIngresso;

    let podeAposentar = false;

    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        podeAposentar = true;
    }

    resultadoApo.textContent = `Código do Empregado: ${codigo}\n Idade: ${idade} anos\n Tempo de Trabalho: ${tempoTrabalho} anos\n` +
        (podeAposentar ? "O empregado pode requerer a aposentadoria." : "O empregado NÃO pode requerer a aposentadoria.");
}

function calcEquaSeg() {
    let valorA = Number (document.getElementById ("valA").value)
    let valorB = Number (document.getElementById ("valB").value)
    let valorC = Number (document.getElementById ("valC").value)
    let delta = ((valorB **2) - 4 * valorA * valorC)
    if (delta < 0){
        document.getElementById('x1').innerHTML = "Esta equação não possui raízes reais, ou seja, suas raízes são números complexos"
        exit
    }
    else{
        if(delta == 0){
            const x = (-1 * valorB) / (2 * valorA)
            document.getElementById('x0').innerHTML = "X: " + x
        }
        else{
            const x1 = (((-1 *(valorB)) - (delta ** 0.5)) / (2 * valorA))
            const x2 = (((-1 *(valorB)) - (delta ** 0.5)) / (2 * valorA))
            document.getElementById('x1').innerHTML = "X1: "+ x1
            document.getElementById('x2').innerHTML = "X2: "+ x2
            document.getElementById('delta').innerHTML = "Delta: "+ delta
        }
    }
}