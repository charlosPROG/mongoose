const express = require('express')
const requireDir = require('require-dir')
const cors = require('cors')
const mongoose = require('mongoose')

//iniciando o DB
//url de conexão inicia com o protocolo, ip (caso necessite, user e password ou localhost) e o schema
//logo em seguida, um parâmentro
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })

//iniciando o app
const app = express()

//permitir que eu envie dados em formato de JSON
app.use(express.json())
//definir quem pode acessar a api
app.use(cors())

requireDir('./src/models')

//receber todos os tipos de requisição
app.use('/api', require('./src/routes'))

//usar na porta 3001
app.listen(3001)