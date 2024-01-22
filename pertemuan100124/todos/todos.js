const { rejects } = require('assert');
const generateRandomId = require('./generateRandomId')
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const directory = './database'
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

const checkFile = './database/todos.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const todoQuestion = (question) => {
    return new Promise((resolve, rejects) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const todos = () => {
    const fileTodos = fs.readFileSync(checkFile, 'utf-8')
    const data = JSON.parse(fileTodos)
    console.log(data)
    rl.close()
}

// menambahkan data baru
const storeTodo = (title, description, status) => {
    const id = generateRandomId(10);
    const todo = { id, title, description, status }
    const file = fs.readFileSync(checkFile, 'utf-8')

    const dataTodos = JSON.parse(file)
    dataTodos.push(todo)
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2))
    console.log('---------------')
    console.log(' Succes full ✔')
    console.log('---------------')
    rl.close()
}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8')
    const data = JSON.parse(file)
    const findTodoId = data.find(todo => todo.id === id)

    if (findTodoId) {
        console.log(findTodoId);
    } else {
        console.log(`\n ID ${id} not found! \n`);
    }
    rl.close()
}

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8')
    const data = JSON.parse(file)
    const index = data.findIndex(todo => todo.id === id)

    if (index !== -1) {

    }
}

module.exports = { todoQuestion, todos, storeTodo, getById }

