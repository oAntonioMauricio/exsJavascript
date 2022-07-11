// EX01
document.getElementById("botaoparimpar").onclick = function () {
    let numero = document.getElementById("numeroparimpar").valueAsNumber;
    let parouimpar = numero % 2;
    document.getElementById("teste1").innerHTML = `O número é ${numero} e o resto da divisão dá ${parouimpar}`;
    if (parouimpar === 0) {
        document.getElementById("resultadoparimpar").innerHTML = `O número ${numero} é par.`;
    } else {
        document.getElementById("resultadoparimpar").innerHTML = `O número ${numero} é impar.`;
    }
}

// EX02
document.getElementById("aleatorio").onclick = function () {
    let aleatorio = Math.floor((Math.random() * 100) + 1)
    document.getElementById("teste2").innerHTML = `O número aleatório é ${aleatorio}.`
    if ((aleatorio % 2) == 0) {
        document.getElementById("resultadoaleatorio").innerHTML = `O número ${aleatorio} é par.`;
    } else {
        document.getElementById("resultadoaleatorio").innerHTML = `O número ${aleatorio} é impar.`;
    }
}

// EX03
document.getElementById("botaoKMS").onclick = function () {
    let numero = document.getElementById("KMS").valueAsNumber;
    let milhas = (numero * 0.62) / 1;
    document.getElementById("resultadoKMS").innerHTML = `${numero} Kms são ${milhas} Milhas`;
}

// EX04
document.getElementById("botaograus").onclick = function () {
    let graus = document.getElementById("graus").valueAsNumber;
    let fahrenheit = (graus * 1.8) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    document.getElementById("resultadograus").innerHTML = `${graus} graus são ${fahrenheit} fahrenheit`;
}

// EX05
document.getElementById("botaoidade").onclick = function () {
    let hoje = new Date();
    let anoatual = hoje.getFullYear();

    let anonascimento = document.getElementById("ano").valueAsNumber;
    let idade = anoatual - anonascimento;

    document.getElementById("resultadoidade").innerHTML = `Estamos no ano ${anoatual}. O teu ano de nascimento é ${anonascimento}. Tens ${idade} anos.`;
}

// EX06
document.getElementById("botao1e100").onclick = function () {
    let numero = document.getElementById("1e100").valueAsNumber;
    if (numero > 100 || numero < 1) {
        document.getElementById("resutlado1e100").innerHTML = `Escolhe um número entre 1 e 100`;
    } else {
        document.getElementById("resutlado1e100").innerHTML = ``;
        while (numero <= 100) {
            document.getElementById("resutlado1e100").innerHTML += `${numero} `;
            numero++;
        }
    }
}

// EX07
document.getElementById("botao100para1").onclick = function () {
    let numero = document.getElementById("100para1").valueAsNumber;
    if (numero > 100 || numero < 1) {
        document.getElementById("resultado100para1").innerHTML = `Escolhe um número entre 1 e 100`;
    } else {
        document.getElementById("resultado100para1").innerHTML = ``;
        while (numero >= 1) {
            document.getElementById("resultado100para1").innerHTML += `${numero} `;
            numero--;
        }
    }
}

// EX08
document.getElementById("botaoIMC").onclick = function () {
    let altura = document.getElementById("altura").valueAsNumber;
    let peso = document.getElementById("peso").valueAsNumber;
    let alturaMetros = altura / 100;
    let IMC = (peso / (alturaMetros * alturaMetros)).toFixed(1);
    let recomendação;

    if (IMC < 18.5) {
        recomendação = "abaixo do peso."
    } else if (IMC >= 18.6 & IMC <= 24.9) {
        recomendação = "no peso ideal, parabéns!"
    } else if (IMC >= 25.0 & IMC <= 29.9) {
        recomendação = "levemente acima do peso."
    } else if (IMC >= 30.0 & IMC <= 34.9) {
        recomendação = "com obesidade grau I."
    } else if (IMC >= 35.0 & IMC <= 39.9) {
        recomendação = "com obesidade grau II (severa)."
    } else {
        recomendação = "com obesidade grau III (mórbida)."
    }

    document.getElementById("resultadoIMC").innerHTML = `Tens ${alturaMetros} metros de altura e ${peso} kg de peso. O teu índice de massa corporal é ${IMC}. Estás ${recomendação}`;
}

// EX09
document.getElementById("botaovalor").onclick = function () {
    let nome = document.getElementById("nome").value;
    let valorUm = document.getElementById("valor1").valueAsNumber;
    let valorDois = document.getElementById("valor2").valueAsNumber;
    let valorTres = document.getElementById("valor3").valueAsNumber;
    let media = (valorUm + valorDois + valorTres) / 3;
    media = media.toFixed(1);
    let resultado;

    if (media >= 0 & media <= 5.4) {
        resultado = "Muito Insuficiente";
    } else if (media >= 6 & media <= 9.4) {
        resultado = "Insuficiente";
    } else if (media >= 10 & media <= 13.4) {
        resultado = "Suficiente";
    } else if (media >= 14 & media <= 17.4) {
        resultado = "Bom";
    } else {
        resultado = "Muito Bom";
    }

    document.getElementById("resultadovalor").innerHTML = `O aluno ${nome} teve uma média de ${media}. Teve um aproveitamento ${resultado}.`;
}

// EX10
document.getElementById("botaocalculadora").onclick = function () {
    let valorUm = document.getElementById("valorcalc1").valueAsNumber;
    let valorDois = document.getElementById("valorcalc2").valueAsNumber;
    let resultado;
    if (document.getElementById('soma').checked) {
        resultado = valorUm + valorDois;
        document.getElementById("resultadocalculadora").innerHTML = `O resultado da soma entre ${valorUm} e ${valorDois} é ${resultado}.`;
    } else if (document.getElementById('diferença').checked) {
        resultado = valorUm - valorDois;
        document.getElementById("resultadocalculadora").innerHTML = `O resultado da diferença entre ${valorUm} e ${valorDois} é ${resultado}.`;
    } else if (document.getElementById('multiplicar').checked) {
        resultado = valorUm * valorDois;
        document.getElementById("resultadocalculadora").innerHTML = `O resultado da multiplicação entre ${valorUm} e ${valorDois} é ${resultado}.`;
    } else if (document.getElementById('dividir').checked) {
        resultado = valorUm / valorDois;
        document.getElementById("resultadocalculadora").innerHTML = `O resultado da divisão entre ${valorUm} e ${valorDois} é ${resultado}.`;
    }
}

document.getElementById("botaolimpar").onclick = function () {
    document.getElementById("resultadocalculadora").innerHTML = "";
    document.getElementById("valorcalc1").value = "";
    document.getElementById("valorcalc2").value = "";
    document.getElementById("soma").checked = false;
    document.getElementById("diferença").checked = false;
    document.getElementById("multiplicar").checked = false;
    document.getElementById("dividir").checked = false;
}