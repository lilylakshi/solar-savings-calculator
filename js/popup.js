import { calculateBill2024July } from './rev2024_july.js';
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
    var bill2022 = calculateBill2022(+usageInput);
    var bill2023 = calculateBill2023(+usageInput);
    var bill2023Oct = calculateBill2023Oct(+usageInput);
    var bill2024July = calculateBill2024July(+usageInput);
    document.getElementById("2022BillIn").value = bill2022;
    document.getElementById("2023BillIn").value = bill2023;
    document.getElementById("2023OctBillIn").value = bill2023Oct;
    document.getElementById("2024JulyBillIn").value = bill2024July;
}

function calculateSavings(gridInput, totalUnits) {

    return calculateBill2024July(totalUnits) - calculateBill2024July(gridInput);
}

function init() {
    var calculateSavingsBtn = document.getElementById("calculateSavingsBtn");
    calculateSavingsBtn.addEventListener("click", onSavingsFormSubmit);

    var calculateBillBtn = document.getElementById("calculateBillBtn");
    calculateBillBtn.addEventListener("click", onBillFormSubmit);
}

init();
