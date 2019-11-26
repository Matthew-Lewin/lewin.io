require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const indexRouter = require('./routes/indexRouter')
const blogRouter = require('./routes/blogRouter')
const projectsRouter = require('./routes/projectsRouter')
const db = require('./database.js')

const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
})

// Views! 😎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Static assets 👍
app.use(express.static(path.join(__dirname, '/public')))

// app.set('view engine', 'handlebars');
// app.use(express.static('public'));

app.use('/', indexRouter)
app.use('/blog', blogRouter)
app.use('/projects', projectsRouter)

// 404 - Not found
app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
