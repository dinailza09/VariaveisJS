//NUMBER
const primeironumero = 3;
const segundonumero = 4;
const soma = primeironumero + segundonumero;
console.log(soma);

//STRING - ASPAS DULPAS"" OU SIMPLES''
const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo 2!';
console.log(texto1);
console.log(texto2);

//Concatenação (+) UNIR
const frase = "Meu nome é ";
const nome = "Dinailza Soares!";
console.log(frase + nome);

//Quantos caracteres uma string contém:
var senha = "Dina12345";
console.log(senha.length);

//TYPE Boolean (TRUE-Verdadeiro/FALSE-Falso)
//0->false AND 1->true
const numero1 = 5;
const numero2 = 10;
console.log(numero1 === numero2); //Retorna false, pq não são iguais!
console.log(numero1 !== numero2); //Retorna true, pq são diferentes!

const number1 = 5;
const number2 = 5;
console.log(number1 === number2); //Retorna true, pq são iguais e do mesmo tipo!

// = Atribuindo Valor
// == Comparando Valores
// === Comparando valores idênticos e do mesmo tipo!


//TRUE(1) - FALSE(0)
console.log(1 == true);//retorna true, pq o 1 e o msm que true!
console.log(0 == false);//retorna true, pq o 0 e o msm que false!
console.log('' == false);;//retorna true, pq a string vazia e o msm que false!

// null==>vazio ou nada - null é do tipo object 
let minhaVar; //undefined
let varNull = null;//null
console.log(minhaVar);
console.log(varNull);

//typeof -> é uma palavra chave que serve para perguntarmos ao JavaScript qual é o tipo de dado que está sendo guardado nessa variável.
let numero = 5;
let texto= 'Dina';
console.log(typeof numero);
console.log(typeof texto);

