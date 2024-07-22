// src/routes/getItems.js
const db = require('../persistence/db');

module.exports = async (req, res) => {
    try {
        const connection = db.getConnection(); // Используем getConnection
        const [rows] = await connection.execute('SELECT * FROM items');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
