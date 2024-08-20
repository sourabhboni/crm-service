const Customer = require('../models/customerModel');

// Controller to handle customer creation
const createCustomer = async (req, res) => {
  try {
    const { customerId, name, email, phone, company } = req.body;
    const customer = new Customer({ customerId, name, email, phone, company });
    await customer.save();
    res.status(201).json({ message: 'Customer created successfully', customer });
  } catch (error) {
    console.error('Error creating customer:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to retrieve a list of all customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error('Error retrieving customers:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to retrieve a single customer by ID
const getCustomerById = async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await Customer.findOne({ customerId });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    console.error('Error retrieving customer:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
};
