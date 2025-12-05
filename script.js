function calcularConceitosFinais(dadosTurma){
    let nomes = dadosTurma[0];
    let pesos = dadosTurma[1];

    let resultados = [];

    for (let i = 0; i < nomes.length; i++) {
        let notasAluno = [];

        for (let lin = 2; lin < dadosTurma.length; lin++) {
            notasAluno.push(dadosTurma[lin][i]);
        }

        let somaNotasPonderadas = 0;
        let somaPesos = 0;

        for (let j = 0; j < notasAluno.length; j++) {
            somaNotasPonderadas += notasAluno[j] * pesos[j];
            somaPesos += pesos[j];
        }
        
        let conceitoFinal = somaNotasPonderadas / somaPesos;

        resultados.push({
            nome: nomes[i],
            conceito: conceitoFinal.toFixed(2)
        });
    }
    resultados.sort((a, b) => a.nome.localeCompare(b.nome));
    return resultados;
}

let dadosTurma = [
    ["Lucas", "Ana", "Isabela"],
    [1, 2, 3],
    [8, 6, 5],
    [5, 8, 9],
    [7, 8, 6]
];

let resultados = calcularConceitosFinais(dadosTurma);

let html = "<h2>Conceitos Finais da Turma</h2>";

for (let i = 0; i < resultados.length; i++) {
    html += "<li>" + resultados[i].nome + ": " + resultados[i].conceito + "</li>";
}

html += "</ul>";

document.body.innerHTML = html;

console.log("Resultados ordenados: ", resultados);