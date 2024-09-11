const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const connectionString = 'mongodb+srv://User1:Sunshine@cluster0.3z2f2rg.mongodb.net/';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db('DocSpot'); // Replace with your database name
    const collection = database.collection('Doctor'); // Replace with your collection name

    app.get('/api/data', async (req, res) => {
      const data = await collection.find({}).toArray();
      res.json(data);
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);
