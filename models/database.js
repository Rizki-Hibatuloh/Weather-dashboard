const massive = require('massive');

let db;
const getDB = async ({ NODE_ENV }) => {
    if (db) return db;

    try {
        if (NODE_ENV !== 'production') {
            db = await massive({
                host: '127.0.0.1',
                port: 5432,
                database: 'weather_dashboard',
                user: 'postgres',
                password: 'admin' // Masukkan password jika ada
            });
        } else {
            db = await massive({
                connectionString: process.env.DATABASE_URL,
                ssl: { rejectUnauthorized: false }
            });
        }
        console.log("Database connected!");
        return db;
    } catch (err) {
        console.error("Database connection error:", err.message);
        return null;
    }
};

module.exports = getDB;
