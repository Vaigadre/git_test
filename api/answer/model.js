const mongoose = require ('mongoose')

const AnswerSchema = new mongoose.Schema ({
    "que_id": 'String',
    "subject": 'String',   
    "answer": 'String'
})

const Answer = module.exports = mongoose.model ('Answer', AnswerSchema)
