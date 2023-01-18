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
function listOfCitiesAndNumberOfStudents() {
    const cityNewYork = {
        city: 'New York',
        students: () => {
            return students.filter((student) => {
                if (student.city === 'New York') {
                    return student;
                }
            });
        }
    };
    const cityLosAngeles = {
        city: 'Los Angeles',
        students: () => {
            return students.filter((student) => {
                if (student.city === 'Los Angeles') {
                    return student;
                }
            });
        }
    };
    const cityChicago = {
        city: 'Chicago',
        students: () => {
            return students.filter((student) => {
                if (student.city === 'Chicago') {
                    return student;
                }
            });
        }
    };
    const arrayListOfCitiesAndStudents = [cityNewYork, cityLosAngeles, cityChicago];
    let layout = ``;
    arrayListOfCitiesAndStudents.forEach(function (city) {
        layout += `
        <p>A cidade de <b>${city.city}</b> possui <b>${city.students().length}</b> alunos.</p>
        `;
    });
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
function averageAgeOfStudents() {
    let total = 0;
    students.forEach((student) => {
        total += student.age;
    });
    const layout = `
    <p> A média de idade dos alunos é de <b>${total / students.length}</b> anos.</p>
    `;
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
function studentsOver21Percent() {
    const studentsOver21 = students.filter(student => student.age > 21);
    const layout = `
    <p> A porcentagem de alunos acima de 21 anos é de <b>${(studentsOver21.length * 100 / students.length).toFixed(2)}%</b></p>
    `;
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
function listOfHobbies() {
    const hobbieSinging = {
        hobbie: 'Singing',
        students: () => {
            return students.filter((student) => {
                return student.hobbies.some(hobbie => hobbie === 'Singing');
            });
        }
    };
    const hobbieReading = {
        hobbie: 'Reading',
        students: () => {
            return students.filter((student) => {
                return student.hobbies.some(hobbie => hobbie === 'Reading');
            });
        }
    };
    const hobbieCoding = {
        hobbie: 'Coding',
        students: () => {
            return students.filter((student) => {
                return student.hobbies.some(hobbie => hobbie === 'Coding');
            });
        }
    };
    const hobbieDancing = {
        hobbie: 'Dancing',
        students: () => {
            return students.filter((student) => {
                return student.hobbies.some(hobbie => hobbie === 'Dancing');
            });
        }
    };
    const hobbieWriting = {
        hobbie: 'Writing',
        students: () => {
            return students.filter((student) => {
                return student.hobbies.some(hobbie => hobbie === 'Writing');
            });
        }
    };
    const hobbieGaming = {
        hobbie: 'Gaming',
        students: () => {
            return students.filter((student) => {
                return student.hobbies.some(hobbie => hobbie === 'Gaming');
            });
        }
    };
    const listOfClubs = [hobbieSinging, hobbieReading, hobbieCoding, hobbieDancing, hobbieWriting, hobbieGaming];
    let layout = ``;
    listOfClubs.forEach(function (club) {
        layout += `
        <p>Lista de alunos interessados no clube: <b>${club.hobbie}</b></p>
        `;
        club.students().forEach(student => {
            layout += `
            <p><b>${student.name}</b></p>
            `;
        });
    });
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
