const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const mornigGrade = (obj, key, grade) => obj[key] = grade;

mornigGrade(lesson2, 'turno', 'manhã');

const listKeys = obj => {
  for (const key in obj) {
    console.log(key);
  }
}

listKeys(lesson2);

const weightObj = obj => console.log(Object.keys(obj).length);

weightObj(lesson2);

const valuesObj = obj => console.log(Object.values(obj));

valuesObj(lesson2);

const allLessons = Object.assign({}, {lesson1, lesson2,  lesson3});

console.log(allLessons);

const getNumberOfStudents = (obj) => {
  const array = Object.keys(obj);
  let total = 0;
  for (i in array) {
    total += obj[array[i]].numeroEstudantes
  }
  return total;
}

console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj, i) => Object.values(obj)[i]

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  if (obj[key] === value){
    return true
    } return false
}
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
console.log(verifyPair(lesson3, 'turno', 'noite'));


