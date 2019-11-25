const express = require('express')
const router = express.Router()
const controller = require('../controllers/projectsController')

router.get('/', controller.project_list)
router.get('/:id', controller.project_detail)

module.exports = router
