let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let kelvin = document.querySelector(".kelvin");
let form = document.querySelector("form");





//pounds converter

form.addEventListener("input", convertWeight)

function convertWeight(e) {
    //e.preventDefault();

    if (e.target.classList.contains("celsius")) {
        let x = e.target.value;
        fahrenheit.value = (x * 1.8) + 32;
        kelvin.value = (x + 273.15) + 15;
        
    }


    if (e.target.classList.contains("fahrenheit")) {
        let x = e.target.value;
        kelvin.value = (x - 32) / 1.8 + 273.15
        celsius.value = (x - 32) / 1.8
        
        
    }


    if (e.target.classList.contains("kelvin")) {
        let x = e.target.value;
        celsius.value =  parseFloat(x) - 273.15
        fahrenheit.value = (x - 273.15) * 1.8 + 32
        
        
    }

}