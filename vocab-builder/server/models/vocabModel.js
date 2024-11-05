//declare "mongoose"
const mongoose = require('mongoose')

//declare schema (table design/structure)
//we declare column (field) name + type along with input validation
const vocabSchema = new mongoose.Schema({
   english: {
      type: String,
      required: true
   },
   german: {
      type: String,
      required: true
   }
})

//declare model
const vocabModel = mongoose.model('vocabs', vocabSchema)  //vocabs: table (collection) name

//export model as a module
module.exports = vocabModel