const mongoose = require('mongoose')

//ter acesso ao model
const Product = mongoose.model('Product')

//exportar
module.exports = {
   //Primeira rota
   //req => requisição para o servidor (parâmetros, usuário que executa a requisição)
   //res => resposta da requisição (informações para o usuário)
   //listar todos os produtos (select)
   async index(req, res) {
      //pegar o parâmetro page
      const { page = 1 } = req.query
      //buscar todos os dados
      //colocar paginação, começar na página 1 e limitar 10 registros por página
      const products = await Product.paginate({}, { page, limit: 10 })

      //retornar em JSON a busca
      return res.json(products)
   },

   //criar produto (insert)
   async store(req, res) {
      //req => passará todos os dados para a requisição, o corpo da aplicação
      const products = await Product.create(req.body)
      return res.json(products)
   },

   //listar detalhe do produto
   async show(req, res) {
      //pegar o id dos parãmetros da rota
      const products = await Product.findById(req.params.id)
      return res.json(products)
   },

   //atualizar um produto (update)
   async update(req, res) {
      //pegar o id dos parãmetros da rota e atualiza-lo com o conteúdo que vem do corpo, e retornar o produto atualizado para a variável
      const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      return res.json(products)
   },

   //deletar um produto (delete)
   async destroy(req, res) {
      //pegar o id dos parãmetros da rota e exclui-lo
      await Product.findByIdAndRemove(req.params.id)
      //retornar uma resposta de sucesso sem conteúdo
      return res.send()
   }
}