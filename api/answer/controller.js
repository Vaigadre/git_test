const Answer = require ('./model')

module.exports.setAnswer = function (req, res)  {
    let answer = new Answer ({
        subject: req.body.subject,
        que_id: req.body.que_id,
        answer: req.body.answer
    })

    Answer.create(answer).then ( (ans) => {
        res.status (201)
        res.send('Answer submitted')
    })
}

module.exports.getAnswerById = function (req, res) {
    Answer.findOne({que_id:req.params.id}, {"__v":0, '_id':0}).then( (ans) => {
        res.json(ans)
    })
}

/*
module.exports.getAnswers = function (req, res) {
    Answer.find({}, {"__v":0}).then ( (ans) => {
        res.json(ans)
    })
}

module.exports.updateAnswer = function  (req, res) {
    Answer.findByIdAndUpdate({_id:req.params.id}, req.body).then( (ans) => {
        res.json(ans)
    })
}

module.exports.deleteAnswer = function (req, res)  {
    Answer.findByIdAndRemove({_id:req.params.id}).then ( (ans) => {
        res.json (ans)
    })
}
*/
