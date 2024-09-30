console.log("Starting database connection test...");

const pool = require('./config/database');

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
    connection.release();
});

console.log("Database connection test script executed.");