// src/routes/addItem.js
const db = require('../persistence/db');

module.exports = async (req, res) => {
    try {
        const { name } = req.body;
        const connection = db.getConnection(); // Используем getConnection
        const [result] = await connection.execute('INSERT INTO items (name) VALUES (?)', [name]);
        res.status(201).json({ id: result.insertId, name });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
