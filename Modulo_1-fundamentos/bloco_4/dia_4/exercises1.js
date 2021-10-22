let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorente: 'sim',
}
// exercicio 1
console.log(`Bem vinda, ${info.personagem}`);

// exercicio 2
info.recorente = 'sim' 
console.log('exercicio 2 : ' + info);


// exercicio 3
for (let i in info) {
  console.log(`exercicio 3 : ${i}`);
}

// exercicio 4 
for (let i in info) {
  console.log(`exercicio 4 : ${info[i]}`);
}

// exercicio 5
for (let i in info) {
  console.log(`exercicio 5 : ${info[i]} e ${info2[i]}`);
}