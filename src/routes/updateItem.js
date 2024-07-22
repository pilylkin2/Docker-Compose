// src/routes/updateItem.js
const db = require('../persistence/db');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const connection = db.getConnection(); // Используем getConnection
        await connection.execute('UPDATE items SET name = ? WHERE id = ?', [name, id]);
        res.status(200).json({ id, name });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
