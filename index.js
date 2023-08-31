//A 1.
//a) 10 50

//b)Invalid unexpected token

//2.
//a)Retorna true
//b
//I true
//II true
//III false

//B 1.
//a)
/*
function informações(){
    console.log('eu sou Renan, tenho 15 anos, moro em São Leopoldo, e sou estudante');
}
informações();
*/

//b)
/*
function retornaInformações(nome, idade, endereço, profissão){
    return ('Eu sou' + nome + ', tenho ' + idade + ' anos, moro em' + endereço + 'e sou' + profissão);
}
retornaInformações
*/

//2.
//a)
/*
function somaNumeros(a, b){
    return a + b;
}
somaNumeros
*/

//b)
/*
function maiorOuIgual(a, b){
    return (a>=b);

}
maiorOuIgual
*/

//c)
/*
function verificarPar(a){
    return (a % 2 === 0);
}
verificarPar
*/

//d)
/*
function tamanhoEMaiusculas(a){
    return a.length + " "+ a.toUpperCase();
}
tamanhoEMaiusculas

*/

//3.

function numeroSoma(a, b){
    return a + b
}

function numeroSubtração(a, b){
    return a - b
}

function numeroDivisão(a ,b){
    return a / b
}

function numeroMultiplicação(a , b){
    return a * b
}

    let primeiroNumero = prompt('Digite um números');
    let segundoNumero = prompt('Digite outro numero');

    console.log(numeroSoma(primeiroNumero, segundoNumero));
    console.log(numeroSubtração(primeiroNumero, segundoNumero));
    console.log(numeroDivisão(primeiroNumero, segundoNumero));
    console.log(numeroMultiplicação(primeiroNumero, segundoNumero));

operaçõesBasicas();
