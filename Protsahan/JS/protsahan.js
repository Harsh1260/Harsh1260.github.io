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
    database: 'protsahan'
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

// Endpoint to handle form submission for urban games
app.post('/urb', (req, res) => {
    const name = req.body.name;
    const contactNumber = req.body['contact'];
    const selectGame = req.body.selectGame;

    const sql = `INSERT INTO \`urban games\` (\`name\`, \`contact\`, \`game\`) VALUES (?, ?, ?)`;
    connection.query(sql, [name, contactNumber, selectGame], (err, result) => {
        if (err) {
            console.error('Error inserting data for urban games: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data for urban games' });
            return;
        }
        console.log('New record inserted into urban games with ID ' + result.insertId);
        console.log('name: ' + name + ', contact: ' + contactNumber + ', game: ' + selectGame);
        res.json({ message: 'New record inserted successfully for urban games' });
    });
});

// Endpoint to handle form submission for stalls
app.post('/stalls', (req, res) => {
    const stallName = req.body.stallName;
    const leaderName = req.body.leaderName;
    const memberCount = req.body['member-count'];
    const contactNumber = req.body['contact-number'];

    const sql = `INSERT INTO \`stalls\` (\`stallname\`, \`leadername\`, \`member-count\`, \`contact-number\`) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [stallName, leaderName, memberCount, contactNumber], (err, result) => {
        if (err) {
            console.error('Error inserting data for stalls: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data for stalls' });
            return;
        }
        console.log('New record inserted into stalls with ID ' + result.insertId);
        console.log('stallname: ' + stallName + ', leadername: ' + leaderName + ', member-count: ' + memberCount + ', contact-number: ' + contactNumber);
        res.json({ message: 'New record inserted successfully for stalls' });
    });
});

// Endpoint to handle form submission for talent hunt
// Endpoint to handle form submission for talent hunt
// Endpoint to handle form submission for talent hunt
app.post('/talenthunt', (req, res) => {
    const participantName = req.body['participant-name'];
    const contactNumber = req.body['contact-number'];
    const year = req.body['year'];
    const talentCategory = req.body['talent-category'] || ''; // Ensure a default value if not provided

    console.log('Received request:', { participantName, contactNumber, year, talentCategory }); // Log received data

    const sql = `INSERT INTO \`talent hunt\` (\`participant-name\`, \`contact-number\`, \`year\`, \`talent-category\`) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [participantName, contactNumber, year, talentCategory], (err, result) => {
        if (err) {
            console.error('Error inserting data for talent hunt: ' + err.stack);
            res.status(500).json({ error: 'Error inserting data for talent hunt' });
            return;
        }
        console.log('New record inserted into talent hunt with ID ' + result.insertId);
        console.log('participant-name: ' + participantName + ', contact-number: ' + contactNumber + ', year: ' + year + ', talent-category: ' + talentCategory);
        res.json({ message: 'New record inserted successfully for talent hunt' });
    });
});









const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
