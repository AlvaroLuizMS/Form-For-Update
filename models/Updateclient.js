// - db faz a requisicao do arquivo db

const db = require('./db')

/* 
    - db.sequelize.define e cria (somente cria uma vez) 
    - a estrutura da tabela do banco de dados
*/

const Updateclient = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.INTEGER
    },
    tel: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.INTEGER
    },
})

// - linha de sincronizaçao para criar tabela no banco
//Updateclient.sync({force: true})

module.exports = Updateclient