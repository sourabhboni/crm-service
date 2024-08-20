const express = require('express');
const helmet = require('helmet');
const connectDB = require('../config/database');
const customerRoutes = require('../routes/customerRoutes');

const app = express();

connectDB();

app.use(helmet());
app.use(express.json());

app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the CRM Service!');
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`CRM Service is running on http://localhost:${PORT}`);
});
