import './App.css';

const arrCompromissos = ['lavar a louca', 'lavar as fraldas', 'fazer o almoco', 'varer o quarto', 'arrumar os brinquedos'];

const arrMap = arrCompromissos.map((compro, i) => `${i + 1}: ${compro}`);

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol className="App">
      {Task(arrMap[0])}
      {Task(arrMap[1])}
      {Task(arrMap[2])}
      {Task(arrMap[3])}
      {Task(arrMap[4])}
    </ol>
  );
}

export default App;
