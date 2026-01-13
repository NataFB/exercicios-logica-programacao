//* Fazer um programa para ler o código de uma peça1, o número de peças 1, o valor unitário de cada peça1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. calcule e mostre o valor a ser pago.


const cod1 = parseInt(prompt("Digite o código da peça 1:"));
const qtd1 = parseInt(prompt("Digite a quantidade de peças 1:"));
const valor1 = parseFloat(prompt("Digite o valor unitário da peça 1:"));

const cod2 = parseInt(prompt("Digite o código da peça 2:"));
const qtd2 = parseInt(prompt("Digite a quantidade de peças 2:"));
const valor2 = parseFloat(prompt("Digite o valor unitário da peça 2:"));
const total = (qtd1 * valor1) + (qtd2 * valor2);

alert(`O total a ser pago é: R$ ${total.toFixed(2)}`);