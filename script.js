let buttons = document.querySelectorAll(".btn");
let outputText = document.querySelector("#output-text");


function calculate(input) {
    return new Function("return" + input)();
}

for (let btn of buttons) {
    btn.addEventListener("click", (event) => {

        let key = event.target.innerHTML;

        switch(key) {

            case "0":
                outputText.innerHTML += 0;
                break;
            case "1":
                outputText.innerHTML += 1;
                break;
            case "2":
                outputText.innerHTML += 2;
                break;
            case "3":
                outputText.innerHTML += 3;
                break;      
            case "4":
                outputText.innerHTML += 4;
                break;
            case "5":
                outputText.innerHTML += 5;
                break;
            case "6":
                outputText.innerHTML += 6;
                break;
            case "7":
                outputText.innerHTML += 7;
                break;
            case "8":
                outputText.innerHTML += 8;
                break;    
            case "9":
                outputText.innerHTML += 9;
                break;  
            case "*":
                outputText.innerHTML += "*";
                break;
            case "/":
                outputText.innerHTML += "/";
                break;
            case "+":
                outputText.innerHTML += "+";
                break;    
            case "-":
                outputText.innerHTML += "-";
                break;
            case "=":
                outputText.innerHTML = calculate(outputText.innerHTML);
                break;
            case "AC":
                outputText.innerHTML = "";
            }
        });
    }

