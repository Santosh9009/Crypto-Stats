import axios from "axios";
import { CryptoSchema } from "../models/Crypto";

const API_KEY = process.env.COINGECKO_API_KEY || "";
const API = process.env.COINGECKO_API_URL || "";

export const fetchCryptoData = async () => {
  const GivenCoins = ["bitcoin", "matic-network", "ethereum"];

  try {
    const response = await axios.get(API + "/simple/price", {
      headers: {
        "x-cg-demo-api-key": API_KEY,
      },
      params:{
        ids: GivenCoins.join(","),
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
      }
    });

    const coins:any = response.data; 
    
    for(const coin in coins){
      await CryptoSchema.create({
        coin: coin,
        price: coins[coin].usd,
        marketCap: coins[coin].usd_market_cap,
        change24h: coins[coin].usd_24h_change,
      })
    }

    console.log("Data fetched and saved to DB");


  } catch (err: any) {
    console.error(err.message);
  }
};
