require("dotenv").config();
const express = require("express");
const app = express();
const { sql } = require("@vercel/postgres");

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/post", async (req, res) => {
  try {
    await sql`INSERT INTO data (data) VALUES (${JSON.stringify(req.body)})`;
    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
