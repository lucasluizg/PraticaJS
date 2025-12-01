let dadosTurma = [
    ["Lucas", "Ana", "Isabela"],
    [1, 2, 3],
    [8, 6, 5],
    [5, 8, 9],
    [7, 8, 6]
];

let nomes = dadosTurma[0];
let pesos = dadosTurma[1];

let resultados = [];

for (let i = 0; i < nomes.length; i++) {
    let notasAluno = dadosTurma[i + 2];

    let somaNotasPonderadas = 0;
    let somaPesos = 0;

    for (let j = 0; j < notasAluno.length; j++) {
        somaNotasPonderadas = somaNotasPonderadas + (notasAluno[j] * pesos[j]);
        somaPesos = somaPesos + pesos[j];
    }

    let conceitoFinal = somaNotasPonderadas / somaPesos;

    resultados.push({
        nome: nomes[i],
        conceito: conceitoFinal.toFixed(2)
    });

}

for (let i = 0; i < resultados.length; i++) {
    for (let j = i + 1; j < resultados.length; j++) {
        if (resultados[i].nome > resultados[j].nome) {
            let temporario = resultados[i];
            resultados[i] = resultados[j];
            resultados[j] = temporario;
        }
    }
    
}

let html = "<h2>Conceitos Finais da Turma</h2><ul>"

for (let i = 0; i < resultados.length; i++) {
    html = html + "<li>" + resultados[i].nome + ": " + resultados[i].conceito + "</li>"; 
}

html = html + "</ul>";

document.body.innerHTML = html;

console.log("Resultados ordenados:", resultados);