console.log('script sourced.');

let finalVal;

function operatorFunction(event) {
    event.preventDefault();
    finalVal = event.target.value;
    console.log(finalVal)
}

function calculate(event) {
    event.preventDefault();
    console.log('submit is working')
    let value1 = document.querySelector('#value1').value;
    let value2 = document.querySelector('#value2').value;
    let operation = finalVal;
    console.log('Inputs are', value1, value2, operation);

    let values = {
        first: value1,
        second: value2,
        operator: operation
    };
    console.log(values);


    axios.post('/numbers', values).then((response) => {
        console.log(response);
        getLastAnswer();
        getResults();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong!')
    });
}

function getResults() {
    axios.get('/history').then((response) => {
        console.log(response)
        let dataFromServer = response.data
        let contentTable = document.querySelector('#history');
        contentTable.innerHTML = '';
        for (let data of dataFromServer) {
            contentTable.innerHTML += `
            <li>${data.first} ${data.operator} ${data.second} = ${data.result}</li>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    })
};


function getLastAnswer() {
    axios.get('/last').then((response) => {
        let lastAnswerDiv = document.querySelector('#last-answer'); 
        lastAnswerDiv.innerHTML = response.data.result; 
    })
}

function clearButton() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
}























/*// send a POST request to the server with the input data
function calculate() {
    event.preventDefault();
    const value1 = document.getElementById("#value1").value;
    const value2 = document.getElementById("#value2").value;
    const operation = document.getElementById("operation").value;
    console.log(calculate);

    const data = { value1, value2, operation };
    axios.post("/calculate", data).then((response) => {
        console.log(response)
            getHistory();
        })
        .catch((error) => {
            console.log(error);
        });
}

// send a GET request to the server to get the historical data
function getHistory() {
    axios.get("/history").then((response) => {
            const history = response.data;
            const historyList = document.getElementById("history");
            historyList.innerHTML = "";
            history.forEach((item) => {
                const li = document.createElement("li");
                li.innerText = `${item.value1} ${item.operation} ${item.value2} = ${item.result}`;
                historyList.appendChild(li);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

// clear the input fields
function clearInput() {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
}

// get the historical data when the page loads
getHistory();*/