// modules
const express = require('express');
const app = express();

// set port
const port = 3000;
app.get('/', (req, res) => res.send('testing web'));

// define route
app.get('/tproute', function(req, res) {
    res.send('routing for app')
})

// start: http://localhost:3000
app.listen(port, () => console.log(`test listening on ${port}`));
