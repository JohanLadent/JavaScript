function reste() {
  var nombre1 = document.getElementById('firstNumber').value;
  var nombre2 = document.getElementById('secondNumber').value;
  result = parseFloat(nombre1) % parseFloat(nombre2);

  alert(result);
}
// querySelector nous permet de selectionné la première occurrence d'un selecteur CSS
var bouton = document.querySelector('input[type="submit"]');
// On utilise la fonction sans les parenthèses car c'est l'évenement qui déclenche l'exécution de la fonction.
bouton.onclick = reste;
