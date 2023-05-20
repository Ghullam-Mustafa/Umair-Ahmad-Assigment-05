// --------------------------Round A Number---------------------------------
document.getElementById('roundANumber').onclick = function () {
    
    var num1 = 10.03;
    var num2 = 54.18;
    var num3 = 354.19;

    alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = num1 + num2 + num3 ;
    totalPrice = Math.round(totalPrice)

    document.getElementById('output').innerHTML = totalPrice;
}

// ------------------------value erase ------------------------------------------------------------------
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = "";
}
// -------------------------output erase ---------------------------------------------------------------
document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = "";
}