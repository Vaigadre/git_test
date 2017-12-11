const mongoose = require ('mongoose')
//const Schema = mongoose.Schema


const StateQuestionSchema = new  mongoose.Schema ({
    "subject": {type: "String", required: [true, 'Subject field is required']},
    "title": {type: "String"},
    "desc": {type: "String"}   
})

const StateQuestion = module.exports = mongoose.model ('StateQuestion', StateQuestionSchema)

