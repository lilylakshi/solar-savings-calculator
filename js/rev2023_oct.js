function calculateOver60(units) {

    var total = 0;

    if (units <= 60) {
        throw "Units should be over 60, invoke the dedicated method for <= 60";
    }

    total += 60 * 38;

    if (units <= 90) {
        total += (units - 60) * 41;
        return total + 480;
    }

    total += 30 * 41;

    if (units <= 120) {
        total += (units - 90) * 59;
        return total + 1180;
    }

    total += 30 * 59;

    if (units <= 180) {
        total += (units - 120) * 59;
        return total + 1770;
    }

    total += 60 * 59;
    total += (units - 180) * 89;

    return total + 2360;
}

function calculateUnder60(units) {

    var total = 0;

    if (units <= 30) {
        total += units * 12;
        return total + 180;
    }

    total += 30 * 12;
    total += (units - 30) * 30;

    return total + 360;
}

export function calculateBill2023Oct(units) {
    return units <= 60 ? calculateUnder60(units) : calculateOver60(units);
}
