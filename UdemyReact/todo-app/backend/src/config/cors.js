module.exports = function(req, res, next){
    //Cabeçalhos enviados na resposta pro browser
    //Permite origens *, qualquer uma
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //Continua o fluxo da aplicação, indo para o proximo midlle até que alguém atenda a requisição e mande uma resposta
    next()
}