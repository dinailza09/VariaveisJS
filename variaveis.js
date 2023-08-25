//Variáveis 
//VAR-> tem escopo de função ou escopo global.
var objeto = 'Bola';
//var objeto = 'Caneta';
//Exemplo-> se descomentar esse linha vai funcionar corretamente, porém vai subrescrever a variável,
//quem tem o resultado bola. Comprometendo o código! Não é recomendável repetir nomes de variáveis!
console.log(objeto);

//LET-> Tem escopo de bloco. 
   {
    let nome = "Dinailza Soares";
    console.log(nome);
   }
//Exemplo-> se descomentar  esse bloco vai funcionar corretamente, poís a variável é uma let,
// podendo ter vários valor em diferentes blocos. 
// {
// let nome= "Dina Soares";
// console.log(nome);
// }

//CONST -> Não pode mudar o valor, SEMPRE VAI TER O MESMO VALOR! 
const idade = '25';
console.log(idade);
//idade = '30'; Exemplo-> se descomentar  essa linha vai dar erro, poís a variável é uma const,
// podendo só ter um valor único. 

