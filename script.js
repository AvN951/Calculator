let calculation = '';

function calculate(value){
    calculation +=value;
    displaycalculation()
}

function displaycalculation(){
    document.querySelector('.output').innerHTML = calculation
}

function equalbtn(){
    calculation = eval(calculation)
    displaycalculation();
}