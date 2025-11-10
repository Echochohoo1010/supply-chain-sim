// Backend server for Cascade Intelligence World Map
// This is a simple Express server for future API endpoints

import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes

// GET all countries
app.get('/api/countries', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data', 'countries.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData.countries);
  } catch (error) {
    console.error('Error reading countries:', error);
    res.status(500).json({ error: 'Failed to load countries' });
  }
});

// GET country by code
app.get('/api/countries/:code', async (req, res) => {
  try {
    const { code } = req.params;
    const dataPath = path.join(__dirname, 'data', 'countries.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const jsonData = JSON.parse(data);

    const country = jsonData.countries.find(
      c => c.countryCode.toLowerCase() === code.toLowerCase()
    );

    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }

    res.json(country);
  } catch (error) {
    console.error('Error reading country:', error);
    res.status(500).json({ error: 'Failed to load country' });
  }
});

// GET supply chain flows
app.get('/api/supply-chain/flows', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data', 'countries.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData.supplyChainFlows);
  } catch (error) {
    console.error('Error reading supply chain flows:', error);
    res.status(500).json({ error: 'Failed to load supply chain flows' });
  }
});

// POST new supply chain flow (for future use)
app.post('/api/supply-chain/flows', async (req, res) => {
  try {
    const newFlow = req.body;
    const dataPath = path.join(__dirname, 'data', 'countries.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const jsonData = JSON.parse(data);

    jsonData.supplyChainFlows.push(newFlow);

    await fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2));
    res.status(201).json(newFlow);
  } catch (error) {
    console.error('Error creating supply chain flow:', error);
    res.status(500).json({ error: 'Failed to create supply chain flow' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Cascade Intelligence API Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🌍 Countries API: http://localhost:${PORT}/api/countries`);
});
