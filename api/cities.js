const router = require('express').Router();
const { getAll, insert } = require('../models/cities');

router.get('/', async (req, res) => {
    try {
        const cities = await getAll();
        res.json({ cities });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { city } = req.body;

        console.log('City received:', city); // Log untuk debugging

        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const result = await insert(city);
        
        if (!result) {
            return res.status(500).json({ error: 'Failed to insert city' });
        }

        res.status(201).json(result);
    } catch (error) {
        console.error('Error inserting city:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
