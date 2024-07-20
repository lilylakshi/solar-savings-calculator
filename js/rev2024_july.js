function calculateOver60(units) {

    var total = 0;

    if (units <= 60) {
        throw "Units should be over 60, invoke the dedicated method for <= 60";
    }

    total += 60 * 15;

    if (units <= 90) {
        total += (units - 60) * 18;
        return total + 400;
    }

    total += 30 * 18;

    if (units <= 120) {
        total += (units - 90) * 30;
        return total + 1000;
    }

    total += 30 * 30;

    if (units <= 180) {
        total += (units - 120) * 42;
        return total + 1500;
    }

    total += 60 * 42;
    total += (units - 180) * 65;

    return total + 2000;
}

function calculateUnder60(units) {

    var total = 0;

    if (units <= 30) {
        total += units * 6;
        return total + 100;
    }

    total += 30 * 6;
    total += (units - 30) * 9;

    return total + 250;
}

export function calculateBill2024July(units) {
    return units <= 60 ? calculateUnder60(units) : calculateOver60(units);
}
