# Crypto Price Tracker Backend

This is a backend application that fetches the latest cryptocurrency prices (Bitcoin, Matic, and Ethereum) every 2 hours, stores the data in a MongoDB database, and provides APIs to retrieve the data.

## Features

1. **Background Job**: Fetches the current price, market cap, and 24-hour price change of Bitcoin, Matic, and Ethereum every 2 hours using the CoinGecko API.
2. **/stats API**: Returns the latest data for a specific cryptocurrency.
3. **/deviation API**: Calculates and returns the standard deviation of the price of the requested cryptocurrency from the last 100 records.

## Tech Stack

- **Node.js**: JavaScript runtime for building the server
- **Express**: Web framework for building APIs
- **MongoDB**: Database for storing cryptocurrency data
- **CoinGecko API**: Fetches live cryptocurrency data
- **Mongoose**: MongoDB ODM for interacting with the database
- **Node Cron**: Schedules the background job to fetch data every 2 hours

## Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker-backend.git
   cd crypto-price-tracker-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=mongodb://your_mongo_connection_string
   COINGECKO_API_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_LEY=your_coingecko_api_key
   ```

## Running Locally

To start the server, run:
```bash
npm start
```

The server should now be running locally at http://localhost:5000.

## APIs

### 1. /stats API

`GET /stats?coin=bitcoin`

**Query Params:**
- `coin`: The cryptocurrency you want data for. (bitcoin, matic, ethereum)

**Response:**
```json
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```

### 2. /deviation API

`GET /deviation?coin=bitcoin`

**Query Params:**
- `coin`: The cryptocurrency for which you want the standard deviation of price. (bitcoin, matic, ethereum)

**Response:**
```json
{
  "deviation": 4082.48
}
```

## Cron Job for Background Data Fetching

The background job runs every 2 hours and fetches the latest price, market cap, and 24-hour price change of the following cryptocurrencies:
- Bitcoin
- Matic
- Ethereum

This data is then stored in a MongoDB database, and the APIs provide access to the most recent data.
