const Todo = require('./todo')

Todo.methods([ 'get', 'post', 'put', 'delete' ])

//Update não valida algumas coisas
//Quando atualizado um determinado registro no mongo, por padrão o node retorna o registro antigo e não o novo
// new: true indica que quer retornar o registro atualizado
// Por padrão NodeRestfull não valida atualizações, runValidatiors: true informa que quer validar os registros no momento do update
Todo.updateOptions({new: true, runValidatiors: true})

module.exports = Todo