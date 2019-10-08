const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send('Welcome to the projects... 🔫')
	next();
});

router.get('/:id', (req, res, next) => {
	const id = req.params.id * 1;
	res.status(200).send(`Welcome to project # ${id}`)
	next();
});

module.exports = router;
