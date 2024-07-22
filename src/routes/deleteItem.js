// src/routes/deleteItem.js
const db = require('../persistence/db');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = db.getConnection(); // Используем getConnection
        await connection.execute('DELETE FROM items WHERE id = ?', [id]);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
