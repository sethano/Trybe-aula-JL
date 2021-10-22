function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysUL = document.querySelector('#days');

const mounthDays = () => {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const day = document.createElement('li');
    daysUL.appendChild(day);
    day.classList.add('day');
    const text = dezDaysList[i];

    if ((text === 24) | (text === 25) | (text === 31)) { 
        day.classList.add('holiday');
        day.innerHTML = text;
    };

    if ((text === 4) | (text === 11) | (text === 18) | (text === 25)){
      day.classList.add('friday');
      day.innerHTML = text;
    } 
    day.innerHTML = text;
  }
}

mounthDays()

const dadbtn = document.querySelector('.buttons-container');

const btnholiday = (a) => {
  const btn = document.createElement('button');
  btn.id = 'btn-holiday'
  dadbtn.appendChild(btn);
  btn.innerHTML = a;
}

btnholiday('Feriados');

const holydayBtn = () =>{
  const getHolidayButton = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'white';
  getHolidayButton.addEventListener('click', () => {
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === setNewColor) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[i].style.backgroundColor = setNewColor;
      }
    }
  })
}

holydayBtn();

const btnfriday = (a) => {
  const btn = document.createElement('button');
  btn.id = 'btn-friday'
  dadbtn.appendChild(btn);
  btn.innerHTML = a;
}

btnfriday('Sexta-Feira');

const fridayBtn = (a) =>{
  const getFridayBtn = document.querySelector('#btn-friday');
  const fridays  = document.querySelectorAll('.friday');
  const newFridayText = 'SEXTOU o/';
  getFridayBtn.addEventListener('click', () => {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newFridayText) {
          fridays[i].innerHTML = newFridayText;
      } else {
          fridays[i].innerHTML = a[i];
      }
    }
  })
}

const dezFridays = [ 4, 11, 18, 25 ];
fridayBtn(dezFridays);

function dayMouseOver() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseover', (event) =>{
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseout', (event) => {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

const dadtasks = document.querySelector('.my-tasks');
const tasks = (a) => {
  const task = document.createElement('span');
  dadtasks.appendChild(task);
  task.innerHTML = a;
}

tasks('Projeto:');

const newTaskDiv = (a) => {
  const newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = a;
  dadtasks.appendChild(newTask);
};

newTaskDiv('green');

const setTaskClass = () => {
  const selectedTask = document.getElementsByClassName('task selected');
  const myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

const setDayColor = () => {
  const selectedTask = document.getElementsByClassName('task selected');
  const days = document.querySelector('#days');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', (event) =>{
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();


//bonus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();