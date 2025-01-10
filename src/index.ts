import express from 'express';
import 'dotenv/config'
import connectDB from './config/db';
import cryptoRoutes from './routes/cryptoRoutes';
import cron from 'node-cron';
import { fetchCryptoData } from './jobs/fetchCryptoData';


const app = express();
const port = 3000;

connectDB();
app.use(express.json());


app.use('/api',cryptoRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

cron.schedule('* * * * *', fetchCryptoData);

app.listen(port, ()=>{
  console.log(`Server is running at http://localhost:${port}`);
})