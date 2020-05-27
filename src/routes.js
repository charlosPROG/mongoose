const express = require('express')
const routes = express.Router()

//importar tudo do ProductController
const ProductController = require('./controllers/ProductController')

//requisição para listar os produtos (select)
routes.get('/products', ProductController.index)
//requisição para listar o detalhe dos produtos, utilizando o id como parâmetro
routes.get('/products/:id', ProductController.show)
//requisição para inserir produtos (insert)
routes.post('/products', ProductController.store)
//requisição para atualizar produtos (update)
routes.put('/products/:id', ProductController.update)
//requisição para deletar produtos (delete)
routes.delete('/products/:id', ProductController.destroy)

//exportar o arquivo
module.exports = routes