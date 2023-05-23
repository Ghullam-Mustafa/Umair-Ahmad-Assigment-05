// --------------------------Round A Number---------------------------------
document.getElementById('roundANumber').onclick = function () {
    // alert("Value gives with points")
    // var num1 = +prompt("enter a first value");
    // var num2 = +prompt("enter a second value");
    // var num3 = +prompt("enter a third value");

    // alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = document.getElementById('data').value
    
    if (!totalPrice) {
        Toastify({
            text: "Enter a valid number",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
totalPrice = Math.round(totalPrice)

    document.getElementById('output').innerHTML = totalPrice;

}

// ------------------------------------ceilANumber================================
document.getElementById('ceilANumber').onclick = function () {
    alert("Value gives with points")
    // var num1 = +prompt("enter a first value");
    // var num2 = +prompt("enter a second value");
    // var num3 = +prompt("enter a third value");

    // alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = document.getElementById('data').value
    totalPrice = Math.ceil(totalPrice)

    document.getElementById('output').innerHTML = totalPrice;
}

// -------------------------Floor A Number--------------------------
document.getElementById('floorANumber').onclick = function () {
    alert("Value gives with points")
    // var num1 = +prompt("enter a first value");
    // var num2 = +prompt("enter a second value");
    // var num3 = +prompt("enter a third value");

    // alert( `first value ${num1} , second value ${num2} , third ${num3} this all value is added`);

    var totalPrice = document.getElementById('data').value
    totalPrice = Math.floor(totalPrice)

    document.getElementById('output').innerHTML = totalPrice;
}

// ------------------------generateARandomNumber------------------------------
document.getElementById('generateARandomNumber').onclick = function () {
    var value = Math.random()
    document.getElementById('output').innerHTML = value
}
// ---------------------------Throw A Dice-----------------------------------
    document.getElementById('throwADice').onclick = function () {
        let randomNumber = Math.random();

        randomNumber = (randomNumber * 6) + 1;

        let dice = Math.floor(randomNumber);
        
        let html = '<h1 class= "text-primarytheme mb-0">'+dice+'</h1><span>Genrate a random number from 1 to 6 </span>'

        document.getElementById('output').innerHTML = html;
    }
// ----------------------------generateAStrongPassword--------------------------------------------
// document.getElementById('generateAStrongPassword').onclick = function () {
//     let randomString = "";
//     let upperCaseAlphabets =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let lowerCaseAlphabets =  "abcdefghijklmnopqrstuvwxyz"
//     let numbers = "0123456789";
//     let symbols = "`~!@#$%^&*-_=+/?.,"
//     let possibleStrig = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;

//     let limmet = 16;
//     for (let i = 0; i < limmet; i++) {
//         let randomNumber = Math.random();

//         randomString +=  possibleStrig.charAt(Math.floor(randomNumber * possibleStrig.length))
//     }
//     document.getElementById('output').innerHTML = randomString;
// }

document.getElementById('generateAStrongPassword').onclick = function () {
    let lenght = document.getElementById('data').value
    if (!lenght) {
        Toastify({
            text: "Enter password length",
            className: "info",
            newWindow: true,
            close: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }
    let randomString = "";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabets =  "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "`~!@#$%^&*-_=+/?.,";
    let possibleStrig = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols ;

    let limmet = lenght ;

    for (let i = 0; i < limmet; i++) {
        
        let randomNumber = Math.random();

        randomString += possibleStrig.charAt(Math.floor(randomNumber * possibleStrig.length));

        
    }
    document.getElementById('output').innerHTML = randomString

}
// -------------------------convertingStrings------------------------------------
    document.getElementById('convertingStrings').onclick = function () {
        let value = getValue();
        let toNumber = Number(value);
         
        let tofixed = Number(value).toFixed(2)
     
        document.getElementById('output').innerHTML = tofixed + " " + toNumber
    }
// --------------------------------controllingLength----------------------------------
    document.getElementById('controllingLength').onclick = function () {
        let num =  getValue();
        num = Number(num);

        num = num.toFixed(2);
        num = Number(num);

        document.getElementById('output').innerHTML = num;
    }

// --------------------------------calculateGST---------------------------
document.getElementById('calculateGST').onclick = function () {
    let  cost = getValue();
    cost = Number(cost);
    let taxInput = +prompt("Enter your text")
    
    let tax = cost * (taxInput / 100);
     
    let totalCost = cost + tax;

    totalCost = Math.round(totalCost)

    document.getElementById('output').innerHTML = 'Your bill  =  <span class = "text-primaryTheme fw-bold"> '+cost+'</span>'; 
    document.getElementById('output').innerHTML += '<br> Tax ' + taxInput + '% =  <span class = "text-danger fw-bold"> '+tax.toFixed(2) +'</span>';
    document.getElementById('output').innerHTML += '<br>Total amount including tax = <span class = "text-success fw-bold">'+totalCost + '</span>' 
}
// --------------------------value------------------------------------------------

    function getValue() {
        return sometext = document.getElementById('data').value;
         
    }
    setTimeout(() => {
        console.log(getValue())
    }, 2000);
    

// ------------------------value erase ------------------------------------------------------------------
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = "";
}
// -------------------------output erase ---------------------------------------------------------------
document.getElementById('Clean').onclick = function () {
   let outputBoxHtml =  document.getElementById('output').innerHTML ;

   if (!outputBoxHtml.length) {
    Toastify({
        text: "It's already empty",
        className: "info",
        newWindow: true,
        close: true,
        style: {
          background: "linear-gradient(to right, #00000, #96c93d)",
        }
      }).showToast();
   }else{
    clearOutput();
    Toastify({
        text: "output result has been cleard",
        className: "info",
        newWindow: true,
        close: true,
        style: {
          background: "linear-gradient(to right, #0009b, #96c93d)",
        }
      }).showToast();
   }
}

// -----------------------------clear-----------------------------
function clearOutput() {
    document.getElementById('output').innerHTML = "";
}

