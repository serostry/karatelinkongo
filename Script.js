function isNumeric (x) {

    return !isNaN(parseFloat(x)) && isFinite(x)
}

function enterFirstNumber() {
    var a = prompt("Enter the firs number", "");
    if (a == null) {
        return
    }
    else if (!isNumeric(a)) {
        alert("Enter correct first number");
        return enterFirstNumber()
    }
    else {

        return a;
    }

}

var firsNum = enterFirstNumber();

if (firsNum !=null) {

    function enterSecondNumber() {
            var b = prompt("Enter the second number", "");
            if (b == null) {
                return
            }
            else if (!isNumeric(b)) {
                alert("Enter correct second number");
                return enterSecondNumber()
            }else

                return b
            }
    var secondNum = enterSecondNumber();

if (secondNum) {
var j = +firsNum + +secondNum;
alert(j);}
    else{alert ("You have just pressed Cancel baton. Good Luck!")}
} else {
    alert ("You have just pressed Cancel baton. Good Luck!")
}
