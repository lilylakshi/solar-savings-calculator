import { calculateBill2023Oct } from './rev2023_oct.js';
import { calculateBill2023 } from './rev2023.js';
import { calculateBill2022 } from './rev2022.js';

function onSavingsFormSubmit() {
    var gridInput = document.getElementById("gridIn").value;
    var solarInput = document.getElementById("solarIn").value;
    var totalUnits = +gridInput + +solarInput;
    var result = calculateSavings(gridInput, totalUnits);
    document.getElementById("resultIn").value = result;
}

function onBillFormSubmit() {
    var usageInput = document.getElementById("usageIn").value;
    var newBill = calculateBill2023Oct(+usageInput);
    var oldBill = calculateBill2023(+usageInput);
    document.getElementById("oldBillIn").value = oldBill;
    document.getElementById("newBillIn").value = newBill;
}

function calculateSavings(gridInput, totalUnits) {

    return calculateBill2023Oct(totalUnits) - calculateBill2023Oct(gridInput);
}

function init() {
    var calculateSavingsBtn = document.getElementById("calculateSavingsBtn");
    calculateSavingsBtn.addEventListener("click", onSavingsFormSubmit);

    var calculateBillBtn = document.getElementById("calculateBillBtn");
    calculateBillBtn.addEventListener("click", onBillFormSubmit);
}

init();
