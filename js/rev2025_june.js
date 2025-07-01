function calculateOver60(units) {
    let total = 0;
    if (units <= 60) {
        throw "Units should be over 60, invoke the dedicated method for <= 60";
    }
    // Block 1: 0-60 kWh @ 12.75 (fixed charge N/A)
    total += 60 * 12.75;
    if (units <= 90) {
        // Block 2: 61-90 kWh @ 18.50, fixed charge 400
        total += (units - 60) * 18.50;
        return total + 400;
    }
    total += 30 * 18.50;
    if (units <= 120) {
        // Block 3: 91-120 kWh @ 24.00, fixed charge 1000
        total += (units - 90) * 24.00;
        return total + 1000;
    }
    total += 30 * 24.00;
    if (units <= 180) {
        // Block 4: 121-180 kWh @ 41.00, fixed charge 1500
        total += (units - 120) * 41.00;
        return total + 1500;
    }
    total += 60 * 41.00;
    // Block 5: Above 180 kWh @ 61.00, fixed charge 2100
    total += (units - 180) * 61.00;
    return total + 2100;
}

function calculateUnder60(units) {
    let total = 0;
    if (units <= 30) {
        // Block 1: 0-30 kWh @ 4.50, fixed charge 80
        total += units * 4.50;
        return total + 80;
    }
    // Block 2: 31-60 kWh @ 8.00, fixed charge 210
    total += 30 * 4.50;
    total += (units - 30) * 8.00;
    return total + 210;
}

export function calculateBill2025June(units) {
    return units <= 60 ? calculateUnder60(units) : calculateOver60(units);
} 