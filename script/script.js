let usdCurr = 41.7;
let eurCurr = 49.5;
let discount = 1.1;

function convert(curr, amount) {
    let number = curr * amount;
    return number;
}



function promotion(number, discount) {
    console.log(number * discount);
}

let res = convert(usdCurr, 100);
promotion(res, discount);