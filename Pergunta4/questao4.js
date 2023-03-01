const dados = require("./dados.json");

function calculaPercentualFaturamento(dados) {
    var total = calculaFaturamentoTotal(dados);
    var percentuais = new Map();

    dados.forEach(dado=>{
        var percentual = dado.valor * 100 / total;
        percentuais.set(dado.regiao, Math.round(percentual));
    })

    return percentuais
}

function calculaFaturamentoTotal(dados) {
    var soma=0;
    dados.forEach(dado => {
        soma += dado.valor;
    });
    return soma;
}

console.log(calculaPercentualFaturamento(dados));