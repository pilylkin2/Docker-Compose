// src/persistence/db.js
const mysql = require('mysql2/promise');

let connection;

async function init() {
    connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    });
    console.log('Connected to mysql db at host', process.env.MYSQL_HOST);
}

async function teardown() {
    if (connection) {
        await connection.end();
        console.log('Database connection closed');
    }
}

function getConnection() {
    if (!connection) {
        throw new Error('Database not initialized');
    }
    return connection;
}

module.exports = { init, teardown, getConnection };
