const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
    data: "you are connected"
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
