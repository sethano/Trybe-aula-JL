function add (a, b) {
  const result = a + b
  return result
}

function sub (a, b) {
  const result = a - b
  return result
}

function mult (a, b) {
  const result = a * b
  return result
}

function div (a, b) {
  const result = a / b
  return result
}

function modu (a, b) {
  const result = a % b
  return result
}

function compare (a, b) {
  if(a > b) {
    return a
  } return b
}

function compare (a, b) {
  if(a > b) {
    return a
  } return b
}

function compare3 (a, b, c) {
  if((a > b) && (a > c))  {
    return a
  }
  if((b > a) && (b > c)) {
    return b
  }
  if((c > a) && (c > b)) {
    return c
  }
}

const posOrNeg = (a) => (a > 0) ? `positive` : (a < 0) ? `negative` : `zero`

const triangulo = (a, b, c) => {
  if ((a < 0) || (b < 0) || (c < 0)){
    return undefined
  }
  if (a + b + c === 180){
    return true
  } return false
}

const chessPieces = (a) => {
  switch (a.toLowerCase()) {
    case 'rei':
      console.log('Rei-> Uma casa apenas para qualquer direção.');
      break;
    case 'bispo':
      console.log('Bispo-> Diagonal.');
      break;
    case 'rainha':
      console.log('Rainha-> Diagonal, horizontal e vertical.');
      break;
    case 'cavalo':
      console.log('Cavalo -> "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre -> Horizontal e vertical.');
      break;
    case 'peão':
      console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
      break;
    default:
      console.log('Erro, peça inválida!');
      break;
  };
}

const porcentagem = (a) => {
  if (a < 0 || a > 100) {
    return `Erro, nota incorreta!`;
  } else if (a >= 90) {
    return `A`;
  } else if (a >= 80) {
    return `B`;
  } else if (a >= 70) {
    return `C`;
  } else if (a >= 60) {
    return `D`;
  } else if (a >= 50) {
    return `E`;
  } else {
    return `F`;
  }
}

const isEven = (a, b, c) => {
  if ((a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0)) { return true } return false
} 

const notEven = (a, b, c) => {
  if ((a % 2 !== 0) || (b % 2 !== 0) || (c % 2 !== 0)) { return true } return false
} 

const market = (a, b) => {
  if ((a <= 0) || b <= 0){
    return `produto invalido`
  }
  const valorTotal = a * 1.2
  const lucro = b - valorTotal
  const lucroMax = lucro * 1000
  return `unidades vedidas: 1000
  preco do produto: ${a}R$
  imposto sobre o produto: ${valorTotal - a}R$
  preco vendido: ${b}R$
  lucro por unidade: ${lucro}R$
  lucr total: ${lucroMax}R$`
}

const salarioLiquido = (a) => {
  let aliquotINSS;
  let aliquotIR;
  if (a <= 1556.94) {
    aliquotINSS = a * 0.08;
  } else if (a <= 2594.92) {
    aliquotINSS = a * 0.09;
  } else if (a <= 5189.82) {
    aliquotINSS = a * 0.11;
  } else {
    aliquotINSS = 570.88;
  }
  let liquidSalary = a - aliquotINSS
  if (liquidSalary <= 1903.98) {
    aliquotIR = 0;
  } else if (liquidSalary <= 2826.65) {
    aliquotIR = (liquidSalary * 0.075) - 142.80;
  } else if (liquidSalary <= 3751.05) {
    aliquotIR = (liquidSalary * 0.15) - 354.80;
  } else if (liquidSalary <= 4664.68) {
    aliquotIR = (liquidSalary * 0.225) - 636.13;
  } else {
    aliquotIR = (liquidSalary * 0.275) - 869.36;
  };
  return `
  Salário Bruto: ${a}R$
  Salário: ${liquidSalary - aliquotIR}R$
  IR: ${aliquotIR}R$
  INSS ${aliquotINSS}R$`
}
console.log(salarioLiquido(4000));