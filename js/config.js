/*
    - const Sequalize faz o requerimendo do modulo 'sequelize'
    - bloco de codigo a baixo refere-se a conexão com banco de dados sql
    - new Sequeliza faz a conexão 
    - o primeiro parametro refere-se ao nome do banco de dados 
    - o segundo ao User e o Terceiro a senha do User
    - host: o servidor em que o banco esta
    - A função sequelize.autheticate() tenta se conectar ao banco de dados 
    - podendo ter somente dois resultados then() sucesso, catch() falha.
    
    sequelize.authenticate().then(function(){
        console.log("Conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha na conexão: "+erro)
    })
*/

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadeatualizacao', 'root', '94290076', {
    host: "localhost",
    dialect: 'mysql'
})