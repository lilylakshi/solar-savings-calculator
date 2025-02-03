function calculateOver60(units) {

    var total = 0;

    if (units <= 60) {
        throw "Units should be over 60, invoke the dedicated method for <= 60";
    }

    total += 60 * 11;

    if (units <= 90) {
        total += (units - 60) * 14;
        return total + 400;
    }

    total += 30 * 14;

    if (units <= 120) {
        total += (units - 90) * 20;
        return total + 1000;
    }

    total += 30 * 20;

    if (units <= 180) {
        total += (units - 120) * 33;
        return total + 1500;
    }

    total += 60 * 33;
    total += (units - 180) * 52;

    return total + 2000;
}

function calculateUnder60(units) {

    var total = 0;

    if (units <= 30) {
        total += units * 4;
        return total + 75;
    }

    total += 30 * 4;
    total += (units - 30) * 6;

    return total + 200;
}

export function calculateBill2025Jan(units) {
    return units <= 60 ? calculateUnder60(units) : calculateOver60(units);
}
