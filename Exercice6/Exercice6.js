function calcul() {
  var nombre1 = document.getElementById('firstNumber').value;
  var nombre2 = document.getElementById('secondNumber').value;
  result = parseFloat(nombre1) % parseFloat(nombre2);

  alert(result);
}
