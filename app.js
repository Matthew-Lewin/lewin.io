require('dotenv').config()
const express = require('express')
const app = express()
const mysql = require('mysql')
const path = require('path')
const port = process.env.PORT || 3000
const indexRouter = require('./routes/indexRouter')
const blogRouter = require('./routes/blogRouter')
const projectsRouter = require('./routes/projectsRouter')

// Connect to the DB
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connected!')
  connection.query(
    'SELECT title, content FROM lewin_io.articles WHERE article_id = "1";',
    (err, result) => {
      if (err) throw err
      console.log(result)
    }
  )
})

// Views! 😎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Static assets 👍
app.use(express.static(path.join(__dirname, 'public')))

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
