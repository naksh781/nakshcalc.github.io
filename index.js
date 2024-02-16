let result = document.getElementById("result");

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    try {
        setResult(eval(result.value));
    } catch (error) {
        setResult("Error");
    }
}

function percentage() {
    setResult(getResult() / 100);
}

function square() {
    setResult(Math.pow(getResult(), 2));
}

function cube() {
    setResult(Math.pow(getResult(), 3));
}

function log() {
    setResult(Math.log10(getResult()));
}


function ln() {
    setResult(Math.log(getResult()));
}

function setResult(value) {
    result.value = value;
}

function getResult() {
    return parseFloat(result.value);
}

function sqrt() {
    setResult(Math.sqrt(getResult()));
}

function pow() {
    setResult(Math.pow(getResult(), prompt("Enter the value (y):")));
}

function exp() {
    setResult(Math.exp(getResult()));
}

function pi() {
    setResult(Math.PI);
}

function abs() {
    setResult(Math.abs(getResult()));
}


function getResult() {
    return parseFloat(document.getElementById("inputValue").value);
}

function setResult(result) {
    document.getElementById("outputResult").innerText = result;
}


function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}


function sin() {
    setResult(Math.sin(toDegrees(getResult())));
}


function cos() {
    setResult(Math.cos(toDegrees(getResult())));
}


function tan() {
    setResult(Math.tan(toDegrees(getResult())));
}


function arcsin() {
    setResult(toRadians(Math.asin(getResult())));
}


function arccos() {
    setResult(toRadians(Math.acos(getResult())));
}

function arctan() {
    setResult(toRadians(Math.atan(getResult())));
}
