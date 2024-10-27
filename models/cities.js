const getDB = require('./database');

const getAll = async () => {
    try {
        const db = await getDB(process.env);
        return await db.cities.find({});
    } catch (error) {
        console.error('Error fetching cities:', error.message);
        throw error; // Melempar error untuk ditangani di rute
    }
};

const insert = async (city_name) => {
    try {
        console.log('Inserting city:', city_name); // Log untuk debugging
        const db = await getDB(process.env);
        const result = await db.cities.insert({ city_name });
        return result;
    } catch (error) {
        console.error('Error inserting city:', error.message);
        throw error; // Melempar error untuk ditangani di rute
    }
};

module.exports = { getAll, insert };
