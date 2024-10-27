const express = require('express');
const bodyParser = require('body-parser');
const getDB = require('../models/database'); 
const massive = require('massive');
require('dotenv').config()

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Fungsi untuk menginisialisasi server dan koneksi database
const startServer = async () => {
    const db = await getDB({ NODE_ENV: ENV });

    if (!db) {
        console.error("Failed to connect to the database.");
        process.exit(1); // Hentikan server jika koneksi gagal
    }

    app.set('db', db); // Simpan instance db di Express app untuk digunakan di router

    // Tambahkan route
    app.use("/api/cities", require("../api/cities.js"));
    app.use("/api/weather", require("../api/weathers.js"));

    // Mulai server
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
};

startServer(); // Panggil fungsi untuk memulai koneksi dan server

module.exports = app;
