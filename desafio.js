// Desafio 01 - Encontre o maior número de uma array
// Escreva um algoritmo que recebe uma array de números inteiros, procure o maior valor e o retorne.
// function getMaxNumber(numbers) {
// }

function getMaxNumber(numbers) {
  return numbers.reduce((a, b) => {
    a < b ? a = b : a;
    return a;
  },0 );
  };

  console.log(getMaxNumber([1, 2, 3, 4, 5, 6]));

//   Desafio 02 - Lanchonete da Trybe
// A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.
// Para isso escreva um algoritmo que recebe o número da opção escolhida conforme tabela abaixo e retorne a string inteira do respectivo lanche:
// "1 - Trybe Lanche Feliz"
// "2 - McTrybe"
// "3 - TrybeWooper"
// "4 - X-Trybe"
// "5 - Triplo Trybe com JS"
// Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:
// -------------------------------
// "Não temos esta opção ainda :("
// -------------------------------
// Utilize Switch/Case para resolver este problema.
// function optionsMenu(number){
//   // Desenvolva seu código nessa função
// }

function optionsMenu(number){
  switch (number) {
    case 1:
      return ("Trybe Lanche Feliz");
    case 2:
      return ("McTrybe");
    case 3:
      return ("TrybeWooper");
    case 4:
      return ("X-Trybe");
    case 5:
      return ("Triplo Trybe com JS");
    default:
      return ("Não temos esta opção ainda :(")
  }
}

console.log(optionsMenu(1));

// Desafio 03 - Verifica se pessoa tem idade para dar entrada na CNH
// Escreva um algoritmo que recebe o nome e ano de nascimento de uma pessoa e verifique se ela pode dar entrada na CNH.
// Se a pessoa tiver menos de 18 anos retorne:
// ------------------------------------------------------
// "x tem y anos de idade e não pode iniciar o processo."
// ------------------------------------------------------
// Caso contrário:
// --------------------------------------------------
// "x tem y anos de idade e pode iniciar o processo."
// --------------------------------------------------
// function cnhProcess(name, birthYear){
//   // Desenvolva seu código nessa função
// }

function cnhProcess(name, birthYear){
    return birthYear >= 18 ? `${name} tem ${birthYear} anos de idade e pode iniciar o processo.` : `${name} tem ${birthYear} anos de idade e não pode iniciar o processo.`
  }

  console.log(cnhProcess('Joao', 15));
