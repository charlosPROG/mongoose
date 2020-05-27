const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//passar os campos do banco, o tipo dele (sempre camelcase) e se é obrigatório
const ProductSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   url: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
})

//colocar paginação
ProductSchema.plugin(mongoosePaginate)

//registrar o model na aplicação
mongoose.model("Product", ProductSchema)