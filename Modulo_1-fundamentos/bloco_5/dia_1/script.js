// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementById('texto').innerText = 'nao sei o que escrever entao vai qualquer coisa porque o foco e o exercicio';
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.querySelector('.main-content').style.backgroundColor = 'rgb(76,164,109)';
// Crie uma função que mude a cor do quadrado vermelho para branco.
document.querySelector('.center-content').style.backgroundColor = 'white';
// Crie uma função que corrija o texto da tag <h1>.
document.querySelector('.title').innerText = 'Exercício 5.1 - JavaScript';
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
const p =  document.getElementsByTagName('p')
for (let i = 0; i < p.length; i += 1) {
  p[i].style.textTransform = "uppercase";
}
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
for (let i = 0; i < p.length; i += 1) {
  console.log(p[i]);
}

