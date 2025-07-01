import { calculateBill2025June } from '../js/rev2025_june.js';

const testCases = [0, 5, 30, 31, 45, 60, 61, 75, 90, 91, 105, 120, 121, 150, 180, 181];

console.log('Testing calculateBill2025June:');
testCases.forEach(units => {
    try {
        const bill = calculateBill2025June(units);
        console.log(`Units: ${units}, Bill: ${bill}`);
    } catch (e) {
        console.log(`Units: ${units}, Error: ${e}`);
    }
}); 