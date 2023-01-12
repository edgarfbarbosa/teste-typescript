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