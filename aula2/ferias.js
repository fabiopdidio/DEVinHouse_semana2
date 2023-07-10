/* Carta de pedido de férias*/

let nomeFuncionario = prompt("Digite o nome do funcionário");
let dataInicio = prompt("Digite a data de início das férias");
let dataFim = prompt("Digite a data de fim das férias");

let cartaFerias = `Caro responsável,
Gostaria de solicitar minhas férias:
Nome do funcionário: ${nomeFuncionario}
Data de início ${dataInicio}
Data de fim ${dataFim}
Agradeço a atenção.
Atenciosamente, ${nomeFuncionario}`;

console.log(cartaFerias);
