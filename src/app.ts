// Abaixo temos uma lista de estudantes, a faculdade precisa selecionar alguns dados dessa lista. Para cada um dos itens abaixo, crie uma função em typescript que receba a lista de alunos e que retorne o que a faculdade precisa:
//  - Uma lista contendo a cidade e quantos alunos são dessa cidade
//  - A média de idade dos alunos
//  - A porcentagem de alunos acima de 21 anos
//  - Uma lista de clubes baseados nos interesses dos alunos (ex: Leitura, Jogos, Dança) contendo todos os alunos com o interesse em comum.

// Não se preocupe com apresentação do resultado das funções, elas serão avaliadas a nível de lógica, práticas de código e legibilidade.
// Se sinta livra para usar bibliotecas úteis para iteração dos dados.

type Student = {
    id: number;
    name: string;
    age: number;
    city: string;
    hobbies: string[];
};

const students: Student[] = [
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

interface CityProps {
    city: string,
    students: () => Student[]
}

const cityNewYork: CityProps = {
    city: 'New York',
    students: () => {
        return students.filter((student) => {
            if (student.city === 'New York') {
                return student
            }
        })
    }
}

const cityLosAngeles: CityProps = {
    city: 'Los Angeles',
    students: () => {
        return students.filter((student) => {
            if (student.city === 'Los Angeles') {
                return student
            }
        })
    }
}

const cityChicago: CityProps = {
    city: 'Chicago',
    students: () => {
        return students.filter((student) => {
            if (student.city === 'Chicago') {
                return student
            }
        })
    }
}

const listOfCitiesAndStudents: CityProps[] = [cityNewYork, cityLosAngeles, cityChicago]

listOfCitiesAndStudents.forEach(function (city) {
    console.log('Cidade: ' + city.city)

    city.students().forEach(student => {
        console.log('Alunos que moram nesta cidade: ' + student.name)
    })

    console.log(`Na cidade ${city.city} tem ${city.students().length} alunos.`)
})

//  - A média de idade dos alunos

function averageAgeOfStudents(): string {
    let total: number = 0

    students.forEach((student) => {
        total += student.age
    })

    const layout: string = `
    <h1>Este é o resultado da média de idade dos alunos:</h1>
    <p>A média de idade dos alunos é ${total / students.length}
    `

    const result = document.getElementById('result') as HTMLElement

    result.innerHTML = layout

    return layout
}

//  - A porcentagem de alunos acima de 21 anos

const studentsOver21 = students.filter(student => student.age > 21)
const studentsOver21Perc = (studentsOver21.length * 100 / students.length).toFixed(2)
console.log('A porcentagem de alunos acima de 21 anos: ' + studentsOver21Perc + '%')

//  - Uma lista de clubes baseados nos interesses dos alunos (ex: Leitura, Jogos, Dança) contendo todos os alunos com o interesse em comum.

interface ClubProps {
    hobbie: string,
    students: () => Student[]
}

const hobbieSinging: ClubProps = {
    hobbie: 'Singing',
    students: () => {
        return students.filter((student) => {
            return student.hobbies.some(hobbie => hobbie === 'Singing')
        })
    }
}

const hobbieReading: ClubProps = {
    hobbie: 'Reading',
    students: () => {
        return students.filter((student) => {
            return student.hobbies.some(hobbie => hobbie === 'Reading')
        })
    }
}

const hobbieCoding: ClubProps = {
    hobbie: 'Coding',
    students: () => {
        return students.filter((student) => {
            return student.hobbies.some(hobbie => hobbie === 'Coding')
        })
    }
}

const hobbieDancing: ClubProps = {
    hobbie: 'Dancing',
    students: () => {
        return students.filter((student) => {
            return student.hobbies.some(hobbie => hobbie === 'Dancing')
        })
    }
}

const hobbieWriting: ClubProps = {
    hobbie: 'Writing',
    students: () => {
        return students.filter((student) => {
            return student.hobbies.some(hobbie => hobbie === 'Writing')
        })
    }
}

const hobbieGaming: ClubProps = {
    hobbie: 'Gaming',
    students: () => {
        return students.filter((student) => {
            return student.hobbies.some(hobbie => hobbie === 'Gaming')
        })
    }
}

const listOfClubs: ClubProps[] = [hobbieSinging, hobbieReading, hobbieCoding, hobbieDancing, hobbieWriting, hobbieGaming]

listOfClubs.forEach(function (club) {
    console.log('Clube: ' + club.hobbie)

    club.students().forEach(student => {
        console.log('Aluno interessado neste clube: ' + student.name)
    })
})