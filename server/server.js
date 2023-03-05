// Require express
const express = require('express')


const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development 
const port = process.env.PORT || 5001;

const history = [];

app.post("/calculate", (req, res) => {
    console.log('POST Request made for /calculate')
    const { value1, value2, operation } = req.body;
    let result;

    switch (operation) {
        case "add":
            result = Number(value1) + Number(value2);
            break;
        case "subtract":
            result = Number(value1) - Number(value2);
            break;
        case "multiply":
            result = Number(value1) * Number(value2);
            break;
        case "divide":
            result = Number(value1) / Number(value2);
            break;
        default:
            result = "Invalid operation";
    }

    // add the calculation to the history array
    const calculation = { value1, value2, operation, result };
    history.push(calculation);

    res.sendStatus(200);
});

// handle GET requests to the /history endpoint
app.get("/history", (req, res) => {
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