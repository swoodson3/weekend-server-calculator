// Require express
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development 
const port = process.env.PORT || 5001;

const history = [];

const numbers = [];

app.use(bodyParser.json());

app.post('/numbers', (req, res) => {
    console.log('POST Request made for /numbers');
    const { first, second, operator } = req.body
    let result

    switch (operator) {
        case '+':
            result = Number(first) + Number(second)
            break
        case '-':
            result = Number(first) - Number(second)
            break
        case '*':
            result = Number(first) * Number(second)
            break
        case '/':
            result = Number(first) / Number(second)
            break
        default:
            result = null
    }

    if (result !== null) {
        history.push(result)
        res.status(200).send({ result })
    } else {
        res.status(400).send({ error: 'Invalid opertator' })
    }
});

app.get('/numbers', (req, res) => {
    console.log('GET request made for /numbers');
    res.send(history)
})

// handle GET requests to the /history endpoint
app.get('/history', (req, res) => {
    console.log('GET request made for /history')
    res.status(200);
});

// Look here for files
app.use(express.json());

app.use(express.static('server/public'));

// Listen or request for files 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});