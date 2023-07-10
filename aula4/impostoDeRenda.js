/* Cálculo do salário líquido apó imposto de renda com uso de funções*/

function calcularImpostoRenda(salarioFuncionario) {
  if (salarioFuncionario <= 1903.98) {
    return 0;
  } else if (salarioFuncionario <= 2826.65) {
    return salarioFuncionario * 0.075 - 142.8;
  } else if (salarioFuncionario <= 3751.05) {
    return salarioFuncionario * 0.15 - 354.8;
  } else if (salarioFuncionario <= 4664.68) {
    return salarioFuncionario * 0.225 - 636.13;
  } else {
    return salarioFuncionario * 0.275 - 869.36;
  }
}
function calcularInss(salarioFuncionario) {
  if (salarioFuncionario <= 1302) {
    return salarioFuncionario * 0.075; // 7.5%
  } else if (salarioFuncionario <= 2571.29) {
    return salarioFuncionario * 0.09; // 9%
  } else if (salarioFuncionario <= 3856.94) {
    return salarioFuncionario * 0.12; // 12%
  } else {
    return salarioFuncionario * 0.14; // 14%
  }
}
function calcularSalarioLiquido(salarioFuncionario, impostoRenda, inss) {
  return salarioFuncionario - impostoRenda - inss;
}
let salarioFuncionario = Number(prompt("Qual é o salário do funcionário?"));
  
let inss = calcularInss(salarioFuncionario);
let impostoRenda = calcularImpostoRenda(salarioFuncionario);
let salarioLiquido = calcularSalarioLiquido(salarioFuncionario, impostoRenda, inss);

let salarioFormatado = salarioLiquido.toFixed(2);

alert("O salário líquido é: R$" + salarioFormatado);

