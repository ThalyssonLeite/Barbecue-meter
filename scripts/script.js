let inputAdults = document.getElementById("adult");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let meatResult = document.getElementById("meatResult");

let result = document.getElementById("result");

let totalMeat; 
let totalAlcoholicBeverage;
let totalDrinks;

let meatPerPersonInGrams = 0.500;
let standardBarbecueTime = 5;

function calculate() {
    let adults = Number(inputAdults.value);
    let childrens = Number(inputChildren.value) / 2;
    let duration = inputDuration.value;
   
    if (duration < 1) {
        duration = 1;
    }

    if (duration > standardBarbecueTime) {
        meatPerPersonInGrams = 0.650;
    } else {
        meatPerPersonInGrams = 0.500;
    }


    let totalMeat = calculateMeat();

    function calculateMeat() {
        return (adults + childrens) * meatPerPersonInGrams;
    }

    meatResult.innerHTML = `${totalMeat}Kg de carne`;
}

function complementAdultsField() {
    let adults = inputAdults.value;
    if (!(inputAdults.value.includes("adult"))) {
        setTimeout(complete, 2500)
    }

    function complete() {
        inputAdults.value += " adult"
    }
    
}

