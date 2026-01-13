//* Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida. Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações conforme exemplo (use a palavra "in" para dentro do intervalo, e "out" para fora do intervalo).

const quantidade = parseInt(prompt("Digite a quantidade de números:"));

const dentro = [];
const fora = [];

for (let i = 0; i < quantidade; i++){
    const numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero >= 10 && numero <=20){
        dentro.push(numero);
    } else {
        fora.push(numero);
    }
}

alert(`in: ${dentro.length}\nout: ${fora.length}`);