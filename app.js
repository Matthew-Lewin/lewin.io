const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
