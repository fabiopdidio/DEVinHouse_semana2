/* Cálculo do custo de frete (peso, distância e custo)
Taxa fixa de R$0,50/Kg e R$0,10/Km, total= custoPeso + CustoKm*/

let peso = Number(prompt("Digite o peso do produto que deseja transportar: "));
let distância = Number(prompt("Digite a distância do trajeto: "));
let custo = peso * 0.5 + distância * 0.1;

console.log("O custo total é: R$" + custo.toFixed(2))
