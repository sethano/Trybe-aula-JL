// exercicio 1
const palindrome = (a) => {
  for(index in a){
    if(a[index] != a[(a.length - 1) - index]){
      return false;
    }
  }
  return true;
};
console.log(palindrome('arara'));

// exercicio 2
const arrTest1 = [2, 3, 6, 7, 10, 1]; 
const iOfBiggestValue = (a) => {
  let index = 0
  for (let i in a){
    if (a[index] < a[i]){
      index = i;
    }
  }
    return index
}
console.log(iOfBiggestValue(arrTest1));

// exercicio 3
const arrtest2 = [2, 4, 6, 7, 10, 0, -3];
const iOfLesserValue = (a) => {
  let index = 0
  for (let i in a){
    if (a[index] > a[i]){
      index = i;
    }
  }
    return index
}
console.log(iOfLesserValue(arrtest2))

// exercicio 4
const arrtest3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
const biggerWord = (a) => {
  let count = a[0]
  for (let i in a) {
    if (count.length < a[i].length) {
      count = a[i];
    }
  }
  return count
}
console.log(biggerWord(arrtest3));

// exercicio 5
const arrTest4 = [2, 3, 2, 5, 8, 2, 3]
const repeat = (a) => {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let i in a) {
    let verificaNumero = a[i];
    for (let i2 in a) {
      if (verificaNumero === a[i2]) {
        contNumero += 1;
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = i;
      }
      contNumero = 0;
    }
    return a[indexNumeroRepetido];
  }
}
console.log(repeat(arrTest4));

// exercicio 6
const n = 5;
const nSum = (a) =>{
  let count = 0
  for (let i = 1; i <= n; i += 1) {
    count += i
  }
  return count
}
console.log(nSum(n));

// exercicio 7
const arrtestword = 'trybe';
const arrtestend = 'be';
const verifyEnd = (a, b) => {
  a = a.split('');
  b = b.split('');
  control = true;
  for (let i = 0; i < b.length; i += 1) {
    if (a[a.length - b.length + i] != b[i]) {
      control = false;
    }
  }
  return control;
};
console.log(verifyEnd(arrtestword, arrtestend));