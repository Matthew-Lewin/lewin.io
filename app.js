const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/indexRouter');
const blogRouter = require('./routes/blogRouter');
const projectsRouter = require('./routes/projectsRouter');

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/projects', projectsRouter);

// 404 - Not found
app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
