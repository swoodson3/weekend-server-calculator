console.log('script sourced.');

let finalVal; 

function operatorFunction(event) {
    finalVal = event.target.value; 
    console.log(finalVal)
}

function calculate(event) {
    let value1 = document.querySelector('#value1').value;
    let value2 = document.querySelector('#value2').value;
    let operation = finalVal;
    console.log(value1, value2, operation);

    let values = {
        first: value1,
        second: value2,
        operator: operation
    };
    console.log(values);
    axios.post('/numbers', values).then((response) => {
        console.log(response);
        getData();
        addToHistory()
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong!')
    });
}

function getData() {
    axios.get('/numbers').then((response) => {
        console.log(response)
        let dataFromServer = response.data
        let contentTable = document.querySelector('#history');
        contentTable.innerHTML = '';
        for (let data of dataFromServer) {
            contentTable.innerHTML += `
            <h2>${data}</h2>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    })
};

getData();

function addToHistory() {

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