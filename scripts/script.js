let adults;
let children;
let duration;

let inputAdults = document.getElementById("adult");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let resultTitle = document.getElementById("resultTitle");
let meatField = document.getElementById("meatField");
let alcoholicField = document.getElementById("alcoholicField");
let drinksField = document.getElementById("drinksField");

let result = document.getElementById("result");

let meatPerPersonInGrams = 0.500;
let alcholicBeveragePerPersonInMilliliters = 0.350;
let normalDrinksAndWaterInMillimiters = 0.400;
let standardBarbecueTimeInHours = 4;




function complementAdultsField() {
    adults = Number(inputAdults.value);

    setTimeout(complement, 100);

    function complement() {
        switch (adults) {
            case 1:
                inputAdults.value += " adult";
                break;

            default:
                inputAdults.value += " adults";
        }
    }
}

function complementChildrenField() {
    if (inputChildren !== undefined) {
        children = Number(inputChildren.value) / 2;
    } else {
        children = Number(0)
    }

    setTimeout(complement, 100)

    function complement() {
        switch (children) {
            case 0.5:
                inputChildren.value += " child";
                break;

            default:
                inputChildren.value += " children";
        }
    }
}

function complementDurationField() {
    duration = Number(inputDuration.value);
    
    setTimeout(complement, 100)

    function complement() {
        switch(duration) {
            case 1:
                inputDuration.value += " hour";
                break;
            
            default: 
                inputDuration.value += " hours";
        }
    }
}

function calculate() {
   
    if (duration === undefined || duration < 1) {
        duration = 1;
    }

    if (duration >= standardBarbecueTimeInHours) {
        meatPerPersonInGrams = 0.650;
        alcholicBeveragePerPersonInMilliliters = 0.700;
        normalDrinksAndWaterInMillimiters = 600;

    } else {
        meatPerPersonInGrams = 0.500;
        alcholicBeveragePerPersonInMilliliters = 0.350;
        normalDrinksAndWaterInMillimiters = 0.400;
    }



    
    calculateMeat();
    calculateAlcoholicBeverage();
    calculateDrinks();

    checkValues();
    

    // adults = 0;
    // children = 0;
    // duration = 0;
}

function checkValues() {

    if (adults == undefined && children == undefined ) {
        adults = 0;
        children = 0;
    } else if (adults === undefined) {
        adults = 0;
    } else if (children === undefined) {
        children = 0;
    }

    if (isNaN(children) || isNaN(adults) || isNaN(duration)) {
        resultTitle.innerHTML = "Ooops!"
        meatField.innerHTML = "Please pay atention, fill out the fields using only numbers";

        alcoholicField.style = "display: none";
        drinksField.style = "display: none";

        appearResult();
    } else {
        resultTitle.innerHTML = "You will need of:"

        alcoholicField.style = "display: list-item";
        drinksField.style = "display: list-item";

        appearResult();
    }
}

function calculateMeat() {
    let totalMeat = (adults + children) * meatPerPersonInGrams;
    meatField.innerHTML = `${totalMeat.toFixed(1)}Kg of meat`;
}

function calculateAlcoholicBeverage() {
    let totalAlcoholicBeverage = adults * alcholicBeveragePerPersonInMilliliters;
    alcoholicField.innerHTML = `${totalAlcoholicBeverage.toFixed(1)}L of alcoholic beverage`;
}

function calculateDrinks() {
    let totalDrinks = children + adults * normalDrinksAndWaterInMillimiters;
    drinksField.innerHTML = `${totalDrinks.toFixed(1)}L of water and soda` 
}

function appearResult() {
    let h3 = document.getElementsByClassName("appearWhenPressCalculate")[0];
    let resultDiv = document.getElementsByClassName("appearWhenPressCalculate")[1];

    h3.style = "display: block";
    resultDiv.style = "display: block";
}

function resetAdults(field) {
        field.value = "";
        adults = 0;
}

function resetChildren(field) {
    field.value = "";
    children = 0;
}

function resetDuration(field) {
    field.value = "";
    duration = 1;
}