const QueList = require ('../stateQuestion/model')

module.exports.getQueList = function (req, res) {
    // console.log(typeof(req.query.records))
    const options = {
         "sort": "srNo",
         "limit": parseInt(req.query.records)
     }
 
     QueList.find({}, {"__v": 0}, options).then( (ques) => {
         res.json(ques)
     }) 
 }

/*
 module.exports.setQuesList = function (req, res) {
    QueList.create (req.body).then ( (ques) => {
        res.json(ques)
    })
}
*/