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

