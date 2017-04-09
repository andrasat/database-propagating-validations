const express = require('express')
const router = express.Router()
const eventEO = require('../controller/event')

/* Routes */
router.get('/event', eventEO.findEO)
router.post('/event', eventEO.createEO)
router.put('/event/:id', eventEO.updateEO)
router.delete('/event/:id', eventEO.deleteEO)

module.exports = router