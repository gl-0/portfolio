const button = document.querySelectorAll('button');
const result = document.getElementById('result');

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', () =>
    {
        const buttonValue = button[i].textContent; /* retrieves the text within the button element */
        if(buttonValue === 'C'){
            clearResult();
        }
        else if(buttonValue === '='){
            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    });
}

clearResult = () => {
    result.value="";
}

calculateResult = () => {
    result.value = eval(result.value);
}

appendValue = (buttonValue) => {
    result.value = result.value + buttonValue;
}