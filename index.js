const express = require ("express")
const app = express()
const handlebars = require ('express-handlebars')
const bodyParser = require('body-parser')
const Updateclient = require('./models/Updateclient')


// - Config
// - Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
//Body-Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

// - Rotas

    app.get('/Server', function(req, res){
        res.render('formulario')
    })
// - Rota para enviar formulario method POST

    app.post('/addcliente', function(req, res){
        
        Updateclient.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            tel: req.body.tel,
            email: req.body.email,
            endereco: req.body.endereco,
            cep: req.body.cep
        }).then(function(){
            res.send("Dados atualizados com sucesso !")
        }).catch(function(erro){
            res.send("Houve um erro: " +erro)
        })
    })


    app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})