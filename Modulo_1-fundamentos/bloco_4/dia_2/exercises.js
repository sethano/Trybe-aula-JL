let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`${numbers[i]}`);
}

// ecercicio 2
let count = 0
for (let i = 0; i < numbers.length; i += 1) {
  count += numbers[i]
}
console.log(`soma do array: ${count}`);

// exercicio 3 e 4
let count2 = 0
let media = 0
for(let i = 0; i < 1; i += 1){
  for (let j = 0; j < numbers.length; j += 1) {
    count2 += numbers[j]
  };
  media = count2 / numbers.length; 
  console.log(`media dos valores do array: ${media}`);
  (media > 20)?console.log(`media maior que 20`):console.log(`media menor ou igual a 20`);
}
// exercicio 5
let count3 = 0
for (let i = 0; i < numbers.length; i += 1) {
  if(count3 < numbers[i]){
    count3 = numbers[i]
  }
}
console.log(`maior valor: ${count3}`);

// exercicio 6
let impar = []
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    impar.push(numbers[i])
  }
}
(impar === undefined)?console.log(`nenhum valor ímpar encontrado`):console.log(`numeros impares: ${impar}`)

// exercicio 7
let count4 = numbers.length
for (let i = 0; i < numbers.length; i += 1) {
  if(count4 > numbers[i]){
    count4 = numbers[i]
  }
}
console.log(`menor valor: ${count4}`);

// exercicio 8 e 9
let count5 = []
for (let i = 1; i <= 25; i += 1) {
  let number = i
  count5.push(number);
}
console.log(count5);

let count6 = []
for (let i = 0; i < count5.length; i += 1) {
   count6.push(`${count5[i]} / 2 = ${count5[i] / 2}`)
}
console.log(count6);