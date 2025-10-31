const axios = require("axios");

async function scanStocks() {
  try {
    const url = "https://www.nseindia.com/api/live-analysis-52Week";
    
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const stocks = response.data?.data || [];
    
    const filtered = stocks.filter(s =>
      s.dayHigh === s.yearHigh && s.volume > 100000
    );

    console.log("🔥 Breakout Candidates Today:");
    filtered.forEach(s => console.log(`${s.symbol} | High Breakout | Volume: ${s.volume}`));
    
  } catch (err) {
    console.log("Error fetching data", err.message);
  }
}

scanStocks();
