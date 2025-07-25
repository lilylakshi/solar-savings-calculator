import { calculateBill2025Jan } from './rev2025_jan.js';
import { calculateBill2024July } from './rev2024_july.js';
import { calculateBill2023Oct } from './rev2023_oct.js';
import { calculateBill2023 } from './rev2023.js';
import { calculateBill2022 } from './rev2022.js';
import { calculateBill2025June } from './rev2025_june.js';

function onSavingsFormSubmit() {
    var gridInput = document.getElementById("gridIn").value;
    var solarInput = document.getElementById("solarIn").value;
    var totalUnits = +gridInput + +solarInput;
    var result = calculateSavings(gridInput, totalUnits);
    document.getElementById("resultIn").value = result;
}

// revision changes start here
function onBillFormSubmit() {
    var usageInput = document.getElementById("usageIn").value;
    var bill2022 = calculateBill2022(+usageInput);
    var bill2023 = calculateBill2023(+usageInput);
    var bill2023Oct = calculateBill2023Oct(+usageInput);
    var bill2024July = calculateBill2024July(+usageInput);
    var bill2025Jan = calculateBill2025Jan(+usageInput);
    var bill2025June = calculateBill2025June(+usageInput);
    document.getElementById("2022BillIn").value = bill2022;
    document.getElementById("2023BillIn").value = bill2023;
    document.getElementById("2023OctBillIn").value = bill2023Oct;
    document.getElementById("2024JulyBillIn").value = bill2024July;
    document.getElementById("2025JanBillIn").value = bill2025Jan;
    document.getElementById("2025JunBillIn").value = bill2025June;
}

function calculateSavings(gridInput, totalUnits) {
    return calculateBill2025June(totalUnits) - calculateBill2025June(gridInput);
}
// revision changes end here

function init() {
    var calculateSavingsBtn = document.getElementById("calculateSavingsBtn");
    calculateSavingsBtn.addEventListener("click", onSavingsFormSubmit);

    var calculateBillBtn = document.getElementById("calculateBillBtn");
    calculateBillBtn.addEventListener("click", onBillFormSubmit);
}

init();
