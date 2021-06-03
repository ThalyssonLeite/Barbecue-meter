let emptyString = "";
let adults;
let childrens;
let duration;

let inputAdults = document.getElementById("adult");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let meatResult = document.getElementById("meatResult");

let result = document.getElementById("result");

let totalAlcoholicBeverage;
let totalDrinks;

let meatPerPersonInGrams = 0.500;
let standardBarbecueTime = 5;




function complementAdultsField() {
    adults = Number(inputAdults.value);

    setTimeout(complement, 1000)

    function complement() {
        if (inputAdults.value.includes("adults", "Adults") == 0) {
            inputAdults.value += " Adults"
        }
    }
}

function complementChildrenField() {
    childrens = Number(inputChildren.value);

    setTimeout(complement, 1000)

    function complement() {
        if (inputChildren.value.includes("Children") == 0) {
            inputChildren.value += " Children"
        }
    }
}

function complementDurationField() {
    i
}

function calculate() {
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

    meatResult.innerHTML = `${totalMeat.toFixed(1)}Kg de carne`;
}

function reset(field) {
    if ((field.value.includes("Adults") || field.value.includes("Children")) || field.value.includes("Hours")) {
        field.value = "";
    } 
}


