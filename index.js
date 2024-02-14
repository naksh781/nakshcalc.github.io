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

function sin() {
    setResult(Math.sin(getResult()));
}

function cos() {
    setResult(Math.cos(getResult()));
}

function tan() {
    setResult(Math.tan(getResult()));
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

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function arcsin() {
    setResult(toDegrees(Math.asin(toRadians(getResult()))));
}

function arccos() {
    setResult(toDegrees(Math.acos(toRadians(getResult()))));
}

function arctan() {
    setResult(toDegrees(Math.atan(toRadians(getResult()))));
}


