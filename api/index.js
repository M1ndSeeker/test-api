const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
