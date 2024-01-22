const { deleteById, todoQuestion } = require('./todos')

const deleteTodo = async () => {
    const id = await todoQuestion("Masukan Id todos: ")
    deleteById(id)
}

deleteTodo()