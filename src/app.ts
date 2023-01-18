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

interface CityProps {
    city: string,
    students: () => Student[]
}

function listOfCitiesAndNumberOfStudents(): string {
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

    const arrayListOfCitiesAndStudents: CityProps[] = [cityNewYork, cityLosAngeles, cityChicago]

    let layout: string = ``

    arrayListOfCitiesAndStudents.forEach(function (city) {
        layout += `
        <p>A cidade de <b>${city.city}</b> possui <b>${city.students().length}</b> alunos.</p>
        `
    })

    const result = document.getElementById('result') as HTMLElement

    result.innerHTML = layout

    return layout
}

function averageAgeOfStudents(): string {
    let total: number = 0

    students.forEach((student) => {
        total += student.age
    })

    const layout: string = `
    <p> A média de idade dos alunos é de <b>${total / students.length}</b> anos.</p>
    `

    const result = document.getElementById('result') as HTMLElement

    result.innerHTML = layout

    return layout
}

function studentsOver21Percent(): string {
    const studentsOver21 = students.filter(student => student.age > 21)

    const layout: string = `
    <p> A porcentagem de alunos acima de 21 anos é de <b>${(studentsOver21.length * 100 / students.length).toFixed(2)}%</b></p>
    `

    const result = document.getElementById('result') as HTMLElement

    result.innerHTML = layout

    return layout
}

interface ClubProps {
    hobbie: string,
    students: () => Student[]
}

function listOfHobbies(): string {
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

    let layout: string = ``

    listOfClubs.forEach(function (club) {
        layout += `
        <p>Lista de alunos interessados no clube: <b>${club.hobbie}</b></p>
        `

        club.students().forEach(student => {
            layout += `
            <p><b>${student.name}</b></p>
            `
        })
    })

    const result = document.getElementById('result') as HTMLElement

    result.innerHTML = layout

    return layout
}