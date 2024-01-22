const { storeTodo, todoQuestion } = require('./todos')

const addTodo = async () => {
    const title = await todoQuestion("Masukkan judul : ")
    const description = await todoQuestion("Masukkan deskripsi : ")
    const sts = await todoQuestion("Masukkan status : ")

    storeTodo(title, description, sts)
}
addTodo()