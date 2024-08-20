const express = require('express');
const { createCustomer, getCustomers, getCustomerById } = require('../controllers/customerController');

const router = express.Router();

// Route to create a new customer
router.post('/create', createCustomer);

// Route to get all customers
router.get('/', getCustomers);

// Route to get a customer by ID
router.get('/:customerId', getCustomerById);

module.exports = router;
