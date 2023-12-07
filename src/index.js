// Importing necessary modules
const express = require('express');
const mysql = require('mysql2');

// Creating an Express Application
const app = express();

// Creating a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Siddhant@123',
    database: 'employeeDB'
});

// Connecting to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// GET request with given endpoint
app.get('/empschema', (req, res) => {
    // Using query in database
    db.query('DESCRIBE employee', (error, results) => {
        if (error) throw error;
        // Using map to return well formated data and sending it in response
        const schema = results.map(data => data.Field + " : " + data.Type).join('\n')
        res.send(schema);
    });
});

// Handling requests for undefined routes
app.use((req, res) => {
    res.status(404).send({ status: false, message: `Page Not Found , Given URL ${req.url} is incorrect for this application.` })
})

//Starting the server
app.listen(3000, () => {
    console.log('Server is running at 3000');
});