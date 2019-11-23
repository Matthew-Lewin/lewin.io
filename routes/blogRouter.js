const express = require('express')
const router = express.Router()
const controller = require('../controllers/blogController')

router.get('/', controller.blog_list)
router.get('/:id', controller.blog_detail)

module.exports = router
