const StateQuestion = require ('./model')


module.exports.setStateQue = function (req, res) {
    let que = new StateQuestion ({
        name: req.body.name,
        state: req.body.state,
        gradedCells: req.body.gradedCells
    })

    StateQuestion.create(que).then(function(que){
        res.status (201)
      //  console.log(typeof(que._id))
        res.json(que._id)          
    })
}



module.exports.getStateQueById = function (req, res) {
    StateQuestion.findOne ( {_id: req.params.id},  {"__v": 0}).then ((que) => {
        res.json(que)
    })
}



/*
module.exports.getStateQue = function (req, res) {
    StateQuestion.find({}, {"__v": 0}).then( (que)=> {
        res.json(que)
    })
}

module.exports.updateStateQue = function (req, res) {
    StateQuestion.findByIdAndUpdate ( {_id: req.params.id}, req.body).then ( (que) => {
        res.json(que)
    })
}

module.exports.deleteStateQue = function (req, res) {
    StateQuestion.findByIdAndRemove ( {_id: req.params.id}).then ( (que) => {
        res.json(que)
    })
}
*/