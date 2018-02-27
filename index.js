const factorial = (a) => {
  let f = 1;
  for(let i = 1; i <= a; i++){
    f *= i;
  }
  return f;
}
// console.log(factorial(3));
const sumInt = (a, b) => {
  return a + b;
}
const subtractionInt = (a, b) => {
  return a - b;
}
const divisionInt = (a, b) => {
  return a / b;
}
const multiplicationInt = (a, b) => {
  return a * b;
}
const absolute = (a) => {
  return a < 0 ? 0 - a : a;
}
const power = (a, pow) => {
  let p = 1;
  for(let _ = 1; _ <= absolute(pow); _++){
    p *= a;
  }
  return pow < 0 ? 1 / p : p;
}
// console.log(power(5,0));
const root = (a, pow) => {}
const mod = (a, b) => {
  return a % b;
}
const log = (a, base) => {

}
const flipSign = (a) => {
  return 0 - a;
}
const sin = (a) => {
  let s = 1;
  let sign = 1;
  for (let i = 1; i <= 150; i++){
    s = s + flipSign(sign) * power(a, i) / factorial(i);
  }
  return s;
}
// console.log(sin(90));
const cos = (a, b) => {}
const percent = (a, b) => {
  return a * b / 100;
}
console.log(percent(100, 25));
const integral = (a, b) => {}
