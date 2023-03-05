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

// Look here for files
app.use(express.json());

app.use(express.static('server/public'));

// Listen or request for files 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});