// exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(`${ifScope}`);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(`${elseScope}`);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const order = (arr) => {
  const ordened = arr.sort((a, b) => a - b);
  return `${ordened}`
} 

console.log(order(oddsAndEvens)); // será necessário alterar essa linha 😉

// exercicio 3

const factorial = (number) => {
  let result = 1
  for (let i = 2; i <= number; i += 1) {
    result *= i
  }
  return `${result}`
}

console.log(factorial(4));

// exercicio 4
const longestWord = text => text.split(' ').sort((a, b) => b.length - a.length)[0]
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

//exercicio 5
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]
const buildSkillsPhrase = param =>{
  const xChange = word =>(`Trybe ${word} aqui!`)
  let result = `${xChange(param)} 
  Minhas cinco principais habilidades são:`
  array.forEach((skill, i) => 
  result = `${result}
  ${skill}`)
  result = `
    ${result}

    #goTrybe
    `
    return result
}
console.log(buildSkillsPhrase('Levyski'));