function calculateOver60(units) {

    var total = 0;

    if (units <= 60) {
        throw "Units should be over 60, invoke the dedicated method for <= 60";
    }

    total += 60 * 16;

    if (units <= 90) {
        total += (units - 60) * 16;
        return total + 360;
    }

    total += 30 * 16;

    if (units <= 180) {
        total += (units - 90) * 50;
        return total + 960;
    }

    total += 90 * 50;
    total += (units - 180) * 75;

    return total + 1500;
}

function calculateUnder60(units) {

    var total = 0;

    if (units <= 30) {
        total += units * 8;
        return total + 120;
    }

    total += 30 * 8;
    total += (units - 30) * 10;

    return total + 240;
}

export function calculateBill2022(units) {
    return units <= 60 ? calculateUnder60(units) : calculateOver60(units);
}