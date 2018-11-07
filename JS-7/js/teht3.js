
document.getElementById('sum').addEventListener('click',sum);
document.getElementById('sub').addEventListener('click',sub);
document.getElementById('multi').addEventListener('click',multi);
document.getElementById('div').addEventListener('click',div);

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
parseFloat(num1);
parseFloat(num2);


function sum() {
  let summa = +num1.value + +num2.value;
  document.getElementById('vastaus').innerHTML= summa;
}
function sub() {
  let subi = +num1.value - +num2.value;
  document.getElementById('vastaus').innerHTML= subi;
}
function multi() {
  let multii = num1.value * num2.value;
  document.getElementById('vastaus').innerHTML= multii;
}
function div() {
  let divi = num1.value / num2.value;
  document.getElementById('vastaus').innerHTML= divi;
}