const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');
const response = require('./Helpers/response')
const app = express();
const TodoRoute = require('./Routes/TodoRoute')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// Get data todos = localhost:6000/api/todos
app.use('/api/todo', TodoRoute)

// // req =  request, res =  response
// app.get('/api/todo', (req, res) => {
//     database.query('SELECT * FROM todo', (err, result) => {
//         if (err) throw err;
//         response(res, 200, { message: 'Success get todo', data: result })
//     });
// });



// // [PUT] mengubah data berdasarkan id = localhost:6000/api/todo/1 / localhost:6000/api/todo/1
// app.put('/api/todo/:id', (req, res) => {
//     const id = req.params.id;
//     const { title, description } = req.body;

//     // [Tugas]⬇
//     if (!title || !description) {
//         return response(res, 400, { message: 'Data tidak boleh kosong' })
//     }

//     database.query("UPDATE todo SET title = ?, description = ? WHERE id = ?", [title, description, id], (err, result) => {
//         if (err) {
//             throw err;
//         } else {
//             if (result.length === 0) {
//                 response(res, 404, { message: `Todo ${id} not found ` })
//             } else {
//                 response(res, 200, { message: 'Success UPDATE todo' })
//             }
//         }
//     })
// })


// // [DELETE] menghapus data todo berdasarkan id = localhost:6000/api/todo/1 / localhost:6000/api/todo/1
// app.delete('/api/todo/:id', (req, res) => {
//     const id = req.params.id;
//     database.query('DELETE FROM todo WHERE id = ?', [id], (err, result) => {
//         if (err) {
//             throw err;
//         } else {
//             if (result.length === 0) {
//                 response(res, 404, { message: `Todo ${id} not found ` })
//             } else {
//                 response(res, 200, { message: 'Success DELETE todo' })
//             }
//         }
//     });
// });

// // [SHOW] melihat data berdasarkan id = localhost:6000/api/todo/1 / localhost:6000/api/todo/1
// app.get('/api/todo/:id', (req, res) => {
//     const id = req.params.id;
//     database.query('SELECT * FROM todo WHERE id = ?', [id], (err, result) => {
//         if (err) {
//             throw err;
//         } else {
//             if (result.length === 0) {
//                 response(res, 404, { message: `Todo ${id} not found ` })
//             } else {
//                 response(res, 200, { message: 'Success Show todo', data: result })
//             }
//         }
//     });
// });

