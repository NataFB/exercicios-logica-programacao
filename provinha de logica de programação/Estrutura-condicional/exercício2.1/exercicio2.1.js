// * Com base na tabela de preços ao lado, faça um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

const codigoProduto = parseInt(prompt("Digite o código do produto (1-5):\n1 - Cachorro Quente R$4.00\n2 - X-Salada R$4.50\n3 - X-Bacon R$5.00\n4 - Torrada Simples R$2.00\n5 - Refrigerante R$1.50"));
const quantidade = parseInt(prompt("Digite a quantidade do produto:"));

if (codigoProduto === 1) {
    const preco = 4.00;
    const total = preco * quantidade;
    alert(`Total a pagar: R$ ${total.toFixed(2)}`);
} else if (codigoProduto === 2) {
    const preco = 4.50;
    const total = preco * quantidade;
    alert(`Total a pagar: R$ ${total.toFixed(2)}`);
} else if (codigoProduto === 3) {
    const preco = 5.00;
    const total = preco * quantidade;
    alert(`Total a pagar: R$ ${total.toFixed(2)}`);
} else if (codigoProduto === 4) {
    const preco = 2.00;
    const total = preco * quantidade;
    alert(`Total a pagar: R$ ${total.toFixed(2)}`);
}   else if (codigoProduto === 5) {
    const preco = 1.50;
    const total = preco * quantidade;
    alert(`Total a pagar: R$ ${total.toFixed(2)}`);
} else {
    alert("Código de produto inválido.");
}