// Require express
const express = require('express')

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development 
const port = process.env.PORT || 5001;

const history = [];

app.post('/numbers', (req, res) => {
    
});

/*app.post('/numbers', (req, res) => {
    console.log(req.body)
    let first = req.body.first;
    let second = req.body.second;
    let operator = req.body.operator;

    
});*/

// handle GET requests to the /history endpoint
app.get('/history', (req, res) => {
    console.log('GET request made for /history')
    res.send(history);
});


// Look here for files
app.use(express.json());

app.use(express.static('server/public'));

// Listen or request for files 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});