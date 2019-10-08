const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/indexRouter');
const blogRouter = require('./routes/blogRouter');
const projectsRouter = require('./routes/projectsRouter');

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/projects', projectsRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
