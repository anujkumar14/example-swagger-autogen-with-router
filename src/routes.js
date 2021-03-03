const express = require('express')
const AdminController = require('./controllers/admin')

const router = express.Router()

const apiV1 = require('./controllers/ApiRoute1')
const apiV2 = require('./controllers/ApiRoute2')

router.use(apiV1)
router.use('/v2', apiV2)

router.get('/test-get', AdminController.show)
router.post('/test-post', store)

function store(req, res) {
    const tools = {}
    return res.status(201).send({})
}

module.exports = router