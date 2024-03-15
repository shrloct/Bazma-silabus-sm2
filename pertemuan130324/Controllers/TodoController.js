const database = require('../db/connection');
const response = require('../Helpers/response');

// Membuat getTodo = localhost:6000/api/todo
const getAllTodo = (req, res) => {
    const querySql = 'SELECT * FROM todo';
    database.query('SELECT * FROM todo', (err, result) => {
        if (err) throw err;
        response(res, 200, { message: 'Success get todo', data: result })
    });
}

// POST menambahkan data baru todo = localhost:6000/api/todos /localhost:6000/todos
const storeTodo = (req, res) => {
    const { title, description } = req.body;

    if (!title && !description) {
        return response(res, 400, { message: 'Error vadlidation', data: { title: "Title harus diisi", description: "Deskripsi harus diisi" } })
    } else if (!title) {
        return response(res, 400, { message: 'Error vadlidation', data: { title: "Title harus diisi" } })
    } else if (!description) {
        return response(res, 400, { message: 'Error vadlidation', data: { description: "Deskripsi harus diisi" } })
    }


    database.query('insert into todo (title, description) values (?, ?)', [title, description], (err, result) => {
        if (err) throw err;
        response(res, 201, { message: 'Success created todo' })
    })
}

// [PUT] mengubah data berdasarkan id = localhost:6000/api/todo/1 / localhost:6000/api/todo/1
const updateTodo = (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    if (!title && !description) {
        return response(res, 400, { message: 'Error vadlidation', data: { title: "Title harus diisi", description: "Deskripsi harus diisi" } })
    } else if (!title) {
        return response(res, 400, { message: 'Error vadlidation', data: { title: "Title harus diisi" } })
    } else if (!description) {
        return response(res, 400, { message: 'Error vadlidation', data: { description: "Deskripsi harus diisi" } })
    }

    database.query("UPDATE todo SET title = ?, description = ? WHERE id = ?", [title, description, id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.affectedRows === 0) {
                response(res, 404, { message: `Todo ${id} not found ` })
            } else {
                response(res, 200, { message: 'Success UPDATE todo' })
            }
        }
    })
}

// [DELETE] menghapus data todo berdasarkan id = localhost:6000/api/todo/1 / localhost:6000/api/todo/1
const deleteTodoId = (req, res) => {
    const id = req.params.id;
    database.query('DELETE FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.affectedRows === 0) {
                response(res, 404, { message: `Todo ${id} not found ` })
            } else {
                response(res, 200, { message: 'Success DELETE todo' })
            }
        }
    });
}

// [SHOW] melihat data berdasarkan id = localhost:6000/api/todo/1 / localhost:6000/api/todo/1
const showTodo = (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.length === 0) {
                response(res, 404, { message: `Todo ${id} not found ` })
            } else {
                response(res, 200, { message: 'Success Show todo', data: result })
            }
        }
    });
}

module.exports = { getAllTodo, storeTodo, updateTodo, deleteTodoId, showTodo }