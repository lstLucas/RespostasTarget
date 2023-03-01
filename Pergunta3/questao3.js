const dados = require("./dados.json");

function calculaMenorFaturamento(dados) {
    var menorValor = dados[0].valor;
    dados.forEach(dado => {
        if (dado.valor < menorValor && dado.valor != 0){
            menorValor = dado.valor;
        }
    });

    return menorValor;
}

function calculaMaiorFaturamento(dados) {
    var maiorValor = dados[0].valor;
    dados.forEach(dado => {
        if (dado.valor > maiorValor && dado.valor != 0){
            maiorValor = dado.valor;
        }
    });

    return maiorValor;
}

function calculaDiasSuperiorMedia(dados) {
    var numDias = 0;
    var media = calculaMediaMensal(dados);

    dados.forEach(dado =>{
        if(dado.valor > media){
            numDias++;
        }
    })

    return numDias;
}

function calculaMediaMensal(dados) {
    var media=0, qtdDias=0;
    dados.forEach(dado =>{
        if(dado.valor != 0){
            media += dado.valor;
            qtdDias ++;
        }
    })
    return media/qtdDias;
}


console.log(calculaMaiorFaturamento(dados)); // Maior valor de faturamento ocorrido em um dia do mês 
console.log(calculaMenorFaturamento(dados)); // Menor valor de faturamento ocorrido em um dia do mês 
console.log(calculaDiasSuperiorMedia(dados)); // Número de Dias no mês em que o valor de faturamento diário foi superior à média mensal.