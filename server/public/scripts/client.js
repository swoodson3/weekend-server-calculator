console.log('script sourced.');

function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;
    const data ={ num1, num2, operator};

    axios.post('/calculate', data).then((response) => {
        console.log(response);
        addToHistory();
        clearInput();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    });
    } 

    
