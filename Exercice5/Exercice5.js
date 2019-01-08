function Result() {
  var nombre1 = document.getElementById('firstNumber').value;
  var nombre2 = document.getElementById('secondNumber').value;
  result = parseInt(nombre1) * parseFloat(nombre2);
  alert("Le resultat est égal à : " + result);
}
