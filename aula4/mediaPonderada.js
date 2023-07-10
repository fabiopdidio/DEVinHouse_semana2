/* 
Calculadora de média com uso de funções
*/

let nota1 = Number(prompt("Digite a primeira nota"));
let nota2 = Number(prompt("Digite a segunda nota"));
let nota3 = Number(prompt("Digite a terceira nota"));

let opcao = prompt(
  "Digite a opção desejada:\n 1 - Média aritmética\n 2 - Média ponderada"
);

let media;

// Verificação da opção escolhida e cálculo da média correspondente
if (opcao === "1") {
  media = calcularMediaAritmetica(nota1, nota2, nota3);
} else if (opcao === "2") {
  media = calcularMediaPonderada(nota1, nota2, nota3);
} else {
  console.log("Opção inválida.");
}

console.log(media);

// Função para calcular a média aritmética
function calcularMediaAritmetica(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return media;
}

// Função para calcular a média ponderada
function calcularMediaPonderada(nota1, nota2, nota3) {
  let media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
  return media;
}
