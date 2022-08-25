function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    } 

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressivas(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
    contagemRegressiva(proximoNumero); 

}

//contagemRegressiva(50);

/* 
 * Formulário envio de dados para calculo da média
 */
document.getElementById('formulario-01').addEventListener('submit', function( evento){

    evento.preventDefault();
    evento.stopPropagation();

    let dados = new FormData(this);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        // adicionar itens no array
        notas.push( parseInt(dados.get(key)));

    }

    console.log(notas);

    console.log(objeto);

    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;

});