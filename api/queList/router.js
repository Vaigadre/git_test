const express = require ('express')
const router = express.Router()
const controller = require ('./controller')


router.get ('/', controller.getQueList)


//router.post ('/', controller.setQuesList)


module.exports = router