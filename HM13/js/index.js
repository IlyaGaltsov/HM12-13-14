function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * pow(base, exponent - 1);
    }
}

let num = parseFloat(prompt('Введіть число'));
let degree = parseInt(prompt('Введіть ступінь'));

let result = pow(num, degree);
console.log(`${num} в ступені ${degree} дорівнює ${result}`);
