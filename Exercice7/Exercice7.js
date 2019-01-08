function calcul() {
  var pointure = document.getElementById('shoeSize').value;
  var date = document.getElementById('yearOfBirth').value;
  result = (pointure * 2 + 5 * 50 - date + 1766);
  alert(result);
}
