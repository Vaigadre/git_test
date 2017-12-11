const StudentResponse = require ('./model')


module.exports.setStudentResponse = function (req, res) {
    let studentResponse = new StudentResponse ({
       question: req.body.question,
       answer: req.body.answer,
       duration: req.body.duration 
    })
    
    StudentResponse.create (studentResponse).then ( (ans)=> {
        res.status (201)
        res.send("student response submitted")
    })
}


/*
module.exports.getStudentResponse = function (req, res)  {
    StudentResponse.find({}, {"__v": 0}).then ( (ans) => {
        res.json (ans)
    })
}

module.exports.getStudentResponseById = function  (req, res) {
    StudentResponse.findOne ({_id: req.params.id}).then ( (ans) => {
        res.json(ans)
    })
}

module.exports.deleteStudentResponse = function (req, res) {
    StudentResponse.findByIdAndRemove ({_id: req.params.id}).then ( (ans) => {
        res.json(ans)
    })
}
*/
