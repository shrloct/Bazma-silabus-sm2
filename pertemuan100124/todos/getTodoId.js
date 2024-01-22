const { getById, todoQuestion } = require('./todos')

const todoId = async () => {
    const id = await todoQuestion("Masukan Id todos: ")
    getById(id)
}

todoId()
