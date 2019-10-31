const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send(`Welcome to the blog`)
	next();
});
router.get('/:id', (req, res, next) => {
	const id = req.params.id * 1;
	res.status(200).send(`Welcome to page ${id}`)
	next();
});

module.exports = router;
