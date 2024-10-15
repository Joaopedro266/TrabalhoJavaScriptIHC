// 1) Maior número entre dois números fornecidos pelo usuário
let a = prompt("Digite o primeiro número:");
let b = prompt("Digite o segundo número:");
let maior = a > b ? a : b;
console.log("1) O maior número é: " + maior);

// 2) Maior número entre dois números fornecidos pelo usuário

let a = prompt("Digite o primeiro número:");
let b = prompt("Digite o segundo número:");
let maior = a > b ? a : b;
console.log("1) O maior número é: " + maior);


// 3) Mensagem de acordo com a nota do usuário
let nota = prompt("Digite sua nota:");
nota = Number(nota);

if (nota < 6) {
    console.log("3) Reprovado");
} else if (nota >= 6 && nota < 8) {
    console.log("3) Aprovado");
} else {
    console.log("3) Aprovado com louvor");
}

// 4) Média dos números de um vetor
let numeros = [];
for (let i = 0; i < 10; i++) {
    let num = prompt("Insira o número " + (i + 1) + ":");
    numeros[i] = Number(num);
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
let media = soma / numeros.length;
console.log("4) A média é: " + media);

// 5) Mensagem de acordo com o valor de uma variável
let variavel = prompt("Digite uma letra (a ou b):");
if (variavel === "a" || variavel === "A") {
    console.log("5) A");
} else if (variavel === "b" || variavel === "B") {
    console.log("5) B");
} else {
    console.log("5) Outra letra");
}

// 6) Soma dos elementos de uma matriz
let matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor para matriz[${i}][${j}]:`));
    }
}

let somaMatriz = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        somaMatriz += matriz[i][j];
    }
}
console.log("6) A soma dos elementos da matriz é: " + somaMatriz);

// 7) Fatorial de um número fornecido pelo usuário
let numero = prompt("Digite um número para calcular o fatorial:");
numero = Number(numero);
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log("7) O fatorial de " + numero + " é: " + fatorial);

// 8) Mensagem de acordo com a escolha do usuário em um menu de opções
console.log("8) 1. Opção 1");
console.log("8) 2. Opção 2");
console.log("8) 3. Opção 3");
let opcao = prompt("Escolha uma opção:");

if (opcao === "1") {
    console.log("8) Opção 1 escolhida");
} else if (opcao === "2") {
    console.log("8) Opção 2 escolhida");
} else if (opcao === "3") {
    console.log("8) Opção 3 escolhida");
} else {
    console.log("8) Opção inválida");
}

// 9) Maior número de um vetor
let vetor = [];
for (let i = 0; i < 10; i++) {
    let valor = prompt("Insira o número " + (i + 1) + ":");
    vetor[i] = Number(valor);
}

let maiorVetor = vetor[0];
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maiorVetor) {
        maiorVetor = vetor[i];
    }
}
console.log("9) O maior número do vetor é: " + maiorVetor);

// 10) Média dos elementos de uma matriz
let novaMatriz = [];
for (let i = 0; i < 3; i++) {
    novaMatriz[i] = [];
    for (let j = 0; j < 3; j++) {
        novaMatriz[i][j] = Number(prompt(`Digite o valor para nova matriz[${i}][${j}]:`));
    }
}

let somaNovaMatriz = 0;
let totalElementos = 0;
for (let i = 0; i < novaMatriz.length; i++) {
    for (let j = 0; j < novaMatriz[i].length; j++) {
        somaNovaMatriz += novaMatriz[i][j];
        totalElementos++;
    }
}
let mediaMatriz = somaNovaMatriz / totalElementos;
console.log("10) A média dos elementos da matriz é: " + mediaMatriz);
