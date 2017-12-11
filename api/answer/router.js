const express = require ('express')
const router = express.Router()
const controller = require ("./controller")



router.post ('/', controller.setAnswer)

router.get ('/:id', controller.getAnswerById)


module.exports = router

/*
router.get ('/', controller.getAnswers)

router.put('/:id',controller.updateAnswer)

router.delete ('/:id', controller.deleteAnswer)
*/

