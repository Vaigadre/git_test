const express = require('express')
const router = express.Router()
const controller = require ('./controller')

/**
 * @swagger
 * definition:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /excel/question:
 *   post:
 *     tags:
 *       - StateQuestion
 *     description: Saves a current question state
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: StateQuestion
 *         description: state question object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.post ('/', controller.setStateQue)


/**
 * @swagger
 * /excel/question/{id}:
 *   get:
 *     tags:
 *       - stateQuestion By ID
 *     description: Returns a single question by question ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Question's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single question
 *         schema:
 *           $ref: '#/definitions/StateQuestion'
 */

router.get ('/:id', controller.getStateQueById)

module.exports = router

/*
router.get ('/', controller.getStateQue)

router.put ('/:id', controller.updateStateQue)

router.delete ('/:id', controller.deleteStateQue)
*/
