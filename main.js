let input= document.getElementById("input");
let buttons = document.querySelectorAll("button");
let inputValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '&radic;') {
            buttonText = Math.sqrt();
            inputValue += Math.sqrt(input.value);
            input.value =inputValue;
        }
        else if (buttonText == 'clear') {
            inputValue = "";
            input.value = inputValue;
        }
        else if (buttonText == 'ans') {
            inputValue = input.value;
            input.value = inputValue;
        }
        else if (buttonText == 'del') {
            inputValue = inputValue.substr(0, inputValue.length - 1);
            input.value = inputValue;
        }
        else if (buttonText == '=') {
            input.value = eval(inputValue);
        }
        else if (buttonText == '=' || buttonText == 'Enter') {
            input.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            input.value = inputValue;
        }

    })
}