//* Faça um programa para ler o valor do raio de um círculo, e depois mostrar o valor da área deste círculo com quatrocasas decimais conforme exemplos.
//? Foruma: área = π . raio2
//? Considere o valor de π = 3.14159

const raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
const area = 3.14159 * raio * raio;
alert(`A área do círculo é: ${area.toFixed(4)}`);