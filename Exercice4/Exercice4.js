function Name() {
  var lastname = document.getElementById('nom').value;
  var firstname = document.getElementById('prenom').value;
  var city = document.getElementById('ville').value;
  result = ("Nom : " + lastname + '\n' + "Prénom : " + firstname + '\n' + "Ville : " + city);
  alert(result);
}
