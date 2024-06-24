const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Use cors middleware to allow requests from any origin
app.use(cors());

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ambiora'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as ID ' + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle preflight requests
app.options('*', cors());
// Serve static files from the directory (if needed)
// app.use(express.static(__dirname));

// Endpoint to handle form submission
app.post('/bab', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`Build a bridge\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into build a bridge with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/hackathon', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`hackathon\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into hackathon with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/treasureHunt', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`treasure hunt\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into e-sports with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/Esports', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`e-sports\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into e-sports with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/Drone', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`drone\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into e-sports with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/robotSoccer', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`robotSoccer\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into hackathon with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/cryptoquest', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];
    const department = req.body.department;
    const year = req.body.year;

    const sql = `INSERT INTO \`cryptoquest\` (\`name\`, \`group-members\`, \`contact-number\`, \`department\`, \`year\`) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber, department, year], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into hackathon with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

app.post('/codingHunt', (req, res) => {
    const name = req.body.name;
    const groupMembers = req.body['group-members'];
    const contactNumber = req.body['contact-number'];

    const sql = `INSERT INTO \`codingHunt\` (\`name\`, \`group-members\`, \`contact-number\`) VALUES (?, ?, ?)`;
    connection.query(sql, [name, groupMembers, contactNumber], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data' }); // Respond with JSON error object
            return;
        }
        console.log('New record inserted into hackathon with ID ' + result.insertId);
        console.log('name:'+name, 'groupMembers:'+groupMembers, 'contactNumber:'+contactNumber, 'department:'+department, 'year:'+year)
        res.json({ message: 'New record inserted successfully' }); // Respond with JSON success object
        
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
