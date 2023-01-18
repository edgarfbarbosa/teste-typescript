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
    const listOfCitiesAndStudents = [cityNewYork, cityLosAngeles, cityChicago];
    let layout = ``;
    listOfCitiesAndStudents.forEach(function (city) {
        layout += `<h1>Cidade: ${city.city}</h1>`;
        // console.log('Cidade: ' + city.city)
        // city.students().forEach(student => {
        //     layout += `<p>Alunos que moram nesta cidade: ${student.name}</p>`
        // })
        // console.log(`Na cidade ${city.city} tem ${city.students().length} alunos.`)
        layout += `<p>Na cidade ${city.city} tem ${city.students().length} alunos.</p>`;
    });
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
//  - A média de idade dos alunos
function averageAgeOfStudents() {
    let total = 0;
    students.forEach((student) => {
        total += student.age;
    });
    const layout = `
    <h1> Este é o resultado da média de idade dos alunos: </h1>
    <p> A média de idade dos alunos é ${total / students.length} </p>
    `;
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
//  - A porcentagem de alunos acima de 21 anos
function studentsOver21Percent() {
    const studentsOver21 = students.filter(student => student.age > 21);
    const layout = `
    <h1> A porcentagem de alunos acima de 21 anos: </h1>
    <p> A porcentagem de alunos acima de 21 anos é de ${(studentsOver21.length * 100 / students.length).toFixed(0)}% </p>
    `;
    const result = document.getElementById('result');
    result.innerHTML = layout;
    return layout;
}
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
listOfClubs.forEach(function (club) {
    console.log('Clube: ' + club.hobbie);
    club.students().forEach(student => {
        console.log('Aluno interessado neste clube: ' + student.name);
    });
});
