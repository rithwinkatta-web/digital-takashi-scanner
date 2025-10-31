const express = require("express");
const axios = require("axios");
const app = express();

app.get("/scan", async (req, res) => {
  const symbol = req.query.symbol;
  if (!symbol) return res.json({ error: "No symbol given" });

  try {
    // We'll update API later — this is basic working server
    res.json({ status: "OK", stock: symbol, message: "Scanner online ✅" });
  } catch (e) {
    res.json({ error: "Scan failed" });
  }
});

app.listen(3000, () => {
  console.log("Scanner running at http://localhost:3000");
});
