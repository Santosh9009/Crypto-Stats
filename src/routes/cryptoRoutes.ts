import { Request ,Response, Router } from "express";
import { CryptoSchema } from "../models/Crypto";
import { std } from "mathjs";


const cryptoRouter = Router();

cryptoRouter.get("/stats", async(req:any, res:any) => {
  const { coin } = req.query;

  try {
    const data = await CryptoSchema.findOne({ coin }).sort({ timestamp: -1 });
    if (!data) return res.status(404).json({ message: "Data not found" });

    res.json({
      price: data.price,
      marketCap: data.marketCap,
      "24hChange": data.change24h,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});



export default cryptoRouter;