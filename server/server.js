// Require express
const express = require('express')



const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development 
const port = process.env.PORT || 5001;

let history = [];


app.get('/history', (req, res) => {
	res.status(200).send(history);
});

app.post('/calculate', (req, res) => {
    console.log('POST Request made for /calculate');
    // Any data we send from the client is available
    // as a property of req.body
    console.log(req.body);
    let numberToAdd = req.body
    history.push(numberToAdd);
    res.sendStatus(201); // Success!
});

// Look here for files
app.use(express.json());

app.use(express.static('server/public'));

// Listen or request for files 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});