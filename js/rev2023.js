function calculateOver60(units) {

    var total = 0;

    if (units <= 60) {
        throw "Units should be over 60, invoke the dedicated method for <= 60";
    }

    total += 60 * 42;

    if (units <= 90) {
        total += (units - 60) * 42;
        return total + 650;
    }

    total += 30 * 42;

    if (units <= 180) {
        total += (units - 90) * 50;
        return total + 1500;
    }

    total += 90 * 50;
    total += (units - 180) * 75;

    return total + 2000;
}

function calculateUnder60(units) {

    var total = 0;

    if (units <= 30) {
        total += units * 30;
        return total + 400;
    }

    total += 30 * 30;
    total += (units - 30) * 37;

    return total + 550;
}

export function calculateBill2023(units) {
    return units <= 60 ? calculateUnder60(units) : calculateOver60(units);
}