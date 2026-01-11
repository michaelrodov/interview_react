import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Load employee data
const employeesPath = join(__dirname, '../src/mockEmployees.json');
const employees = JSON.parse(readFileSync(employeesPath, 'utf-8'));

// Endpoint to serve employee data
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// Endpoint that receives a string, waits 3 seconds, and returns it
app.post('/api/employees/search', async (req, res) => {
  const { term } = req.body;

  if (!term) {
    return res.status(400).json({ error: 'Term is required' });
  }

  // DO NOT CHANGE!
  const filteredList = employees.filter(emp => emp.name.includes(term));
  // await new Promise(resolve => setTimeout(resolve, 1000)); //simulate delay

  res.json({ employees: filteredList });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
