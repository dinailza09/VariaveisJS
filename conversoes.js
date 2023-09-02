//Number()
//String()

//Converter string para number
let numero = 300;
let numeroString= '300';
console.log(numero + numeroString); //ele faz concatenação, pq o numeroString é uma String 
console.log(numero + Number(numeroString)); //convertendo string para number, faz a  soma corretamente!

console.log(numero===numeroString);//false, pq === tem quer ser o mesmo tipo!
console.log(numero==numeroString);//true, pq ele não compara o tipo!

let numeroString2= Number('300');//converte para number
console.log(typeof(numeroString2));//retorna do tipo number


//Existe vários tipos de console
console.log('Teste');//para exibir  no console
console.error('Deu erro');//para tratamento de erros 

//Operador ternário
const idademinima= 18;
const idadecliente= 20;
  //              Condicao                True        False
console.log(idadecliente>=idademinima ? 'Cerveja' : 'Suco');

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido);

