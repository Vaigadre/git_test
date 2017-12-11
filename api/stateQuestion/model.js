const mongoose = require ('mongoose')
//const Schema = mongoose.Schema


const StateQuestionSchema = new  mongoose.Schema ({
   "name": "String",
   "state": "Object",
   "gradedCells": []   
})

const StateQuestion = module.exports = mongoose.model ('StateQuestion', StateQuestionSchema)

