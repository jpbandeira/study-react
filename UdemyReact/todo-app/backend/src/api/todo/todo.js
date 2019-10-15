const restfull = require('node-restful')
const mongoose = restfull.mongoose

const todoSchema = new mongoose.Schema({
    // Descrição da tarefa
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restfull.model('Todo', todoSchema)