/*
Cálculo de IMC;
Uso do if, else if e else;
Classificação do usuário
*/

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite seu peso: "));
let imc = peso / (altura * altura);

console.log(imc);

if (imc <= 18.4) {
  console.log("Você está abaixo do peso!");
} else if (imc <= 18.5 && imc < 24.9) {
  console.log("Você está com o peso ideal");
} else if (imc <= 25 && imc < 29.9) {
  console.log("Você está com sobrepeso");
} else {
  console.log("Você está obeso");
}
