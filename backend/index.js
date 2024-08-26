const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://singh:12345678.aA%40@cluster0.l02gr.mongodb.net/hyu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const Data = mongoose.model('Data', DataSchema);

// Seed data (optional, if you want to insert initial data)
const seedData = async () => {
  const existingData = await Data.find();
  if (existingData.length === 0) {
    const jsonData = [
      {
        end_year: "",
        intensity: 6,
        sector: "Energy",
        topic: "gas",
        insight: "Annual Energy Outlook",
        url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
        region: "Northern America",
        start_year: "",
        impact: "",
        added: "January, 20 2017 03:51:25",
        published: "January, 09 2017 00:00:00",
        country: "United States of America",
        relevance: 2,
        pestle: "Industries",
        source: "EIA",
        title: "U.S. natural gas consumption is expected to increase during much of the projection period.",
        likelihood: 3
      },
      // more data if needed
    ];

    await Data.insertMany(jsonData);
    console.log('Data seeded successfully');
  }
};

seedData();

// API endpoint to get data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
