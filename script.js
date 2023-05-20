// --------------------------Round A Number---------------------------------
document.getElementById('roundANumber').onclick = function () {
    alert("Value gives with points")
    var num1 = +prompt("enter a first value");
    var num2 = +prompt("enter a second value");
    var num3 = +prompt("enter a third value");

    alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = num1 + num2 + num3 ;
    totalPrice = Math.round(totalPrice)

    document.getElementById('output').innerHTML = totalPrice;
}

// ------------------------------------ceilANumber================================
document.getElementById('ceilANumber').onclick = function () {
    alert("Value gives with points")
    var num1 = +prompt("enter a first value");
    var num2 = +prompt("enter a second value");
    var num3 = +prompt("enter a third value");

    alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = num1 + num2 + num3 ;
    totalPrice = Math.ceil(totalPrice)

    document.getElementById('output').innerHTML = totalPrice;
}

// -------------------------Floor A Number--------------------------
document.getElementById('floorANumber').onclick = function () {
    alert("Value gives with points")
    var num1 = +prompt("enter a first value");
    var num2 = +prompt("enter a second value");
    var num3 = +prompt("enter a third value");

    alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = num1 + num2 + num3 ;
    totalPrice = Math.ceil(totalPrice)

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