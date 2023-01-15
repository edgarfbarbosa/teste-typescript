"use strict";
// Abaixo temos uma lista de estudantes, a faculdade precisa selecionar alguns dados dessa lista. Para cada um dos itens abaixo, crie uma função em typescript que receba a lista de alunos e que retorne o que a faculdade precisa:
//  - Uma lista contendo a cidade e quantos alunos são dessa cidade
//  - A média de idade dos alunos
//  - A porcentagem de alunos acima de 21 anos
//  - Uma lista de clubes baseados nos interesses dos alunos (ex: Leitura, Jogos, Dança) contendo todos os alunos com o interesse em comum.
const students = [
    {
        id: 1,
        name: 'John',
        age: 20,
        city: 'New York',
        hobbies: ['Singing', 'Dancing'],
    },
    {
        id: 2,
        name: 'Jane',
        age: 21,
        city: 'Los Angeles',
        hobbies: ['Reading', 'Writing'],
    },
    {
        id: 3,
        name: 'Jack',
        age: 22,
        city: 'Chicago',
        hobbies: ['Coding', 'Gaming'],
    },
    {
        id: 4,
        name: 'Jill',
        age: 21,
        city: 'New York',
        hobbies: ['Singing', 'Writing'],
    },
    {
        id: 5,
        name: 'Joe',
        age: 22,
        city: 'Los Angeles',
        hobbies: ['Coding', 'Dancing'],
    },
    {
        id: 6,
        name: 'Jen',
        age: 20,
        city: 'Chicago',
        hobbies: ['Reading', 'Gaming'],
    },
];
//  - Uma lista contendo a cidade e quantos alunos são dessa cidade
const listOfCities = students.map(student => student.city);
const newListOfCities = [];
listOfCities.forEach(function (city) {
    if (!newListOfCities.includes(city)) {
        newListOfCities.push(city);
    }
});
console.log(newListOfCities);
for (var i = 0; i < newListOfCities.length; i++) {
    console.log(newListOfCities[i]);
}
//  - A média de idade dos alunos
let total = 0;
students.forEach((student) => {
    total += student.age;
});
console.log('A média de idade dos alunos: ' + total / students.length);
//  - A porcentagem de alunos acima de 21 anos
const studentsOver21 = students.filter(student => student.age > 21);
const studentsOver21Perc = (studentsOver21.length * 100 / students.length).toFixed(2);
console.log('A porcentagem de alunos acima de 21 anos: ' + studentsOver21Perc + '%');
//  - Uma lista de clubes baseados nos interesses dos alunos (ex: Leitura, Jogos, Dança) contendo todos os alunos com o interesse em comum.
const listOfClubs1 = students.map(function (student) {
    return student.hobbies[0];
});
console.log(listOfClubs1);
const listOfClubs2 = students.map(function (student) {
    return student.hobbies[1];
});
console.log(listOfClubs2);
const newListOfClubs = [];
listOfClubs1.forEach(function (hobbies) {
    if (!newListOfClubs.includes(hobbies)) {
        newListOfClubs.push(hobbies);
    }
});
listOfClubs2.forEach(function (hobbies) {
    if (!newListOfClubs.includes(hobbies)) {
        newListOfClubs.push(hobbies);
    }
});
for (var i = 0; i < newListOfClubs.length; i++) {
    console.log(newListOfClubs[i]);
}
