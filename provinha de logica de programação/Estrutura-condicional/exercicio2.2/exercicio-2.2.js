//* Ler os valores dos três coeficientes "a", "b" e "c" de uma equação do segundo grau (ax² + bx + c = 0). Em seguida, mostrar os valores das raízes da equação, conforme exemplos, usando a fórmula de Baskara (veja abaixo). Se a equação não possuir raízes (o valor de "a" não pode ser zero, e o valor de "delta" não pode ser negativo), mostrar uma mensagem "Impossivel calcular".

const a = parseFloat(prompt("Digite o coeficiente 'a':"));
const b = parseFloat(prompt("Digite o coeficiente 'b':"));
const c = parseFloat(prompt("Digite o coeficiente 'c':"));

if (a === 0) {
    alert("Impossivel calcular");
} else {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        alert("Impossivel calcular");
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Raízes: X1 = ${x1.toFixed(4)}, X2 = ${x2.toFixed(5)}`);
    }
}