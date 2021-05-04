//Function pour les valeurs randoms
var randomNumber;


//Invocation de la function issue de l'event trigger 'OnClick' depuis le HTML
// Recuperation des elements stockees dans les cases a username etc
// Regarde si l'utilisateur a entree des donnees
function userQuery(firstName, lastName, email) {
  if (firstName !== "" && lastName !== "" && email !== "") {
    functionrandomUrl();
    stpage();
  } else {
      loginRequired();
  }
}

// Cherche le ficher Json, le convertis en objet javascript
// Utilisation de la function Math de javascript pour generer une url aleatoire
function functionrandomUrl() {
  fetch("Data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let urlDatabase = data.urlDatabase;

      var randomNumber = Math.round(Math.random() * urlDatabase.length);
      var randomUrl = urlDatabase[randomNumber];
      window.open(
        randomUrl,
        ((target = "_blank"))
      );
    });}


//Informations sur les utilisateur, ou les infos vont pouvoir etre recuperer
function userInfo() {
  let userInput1 = document.getElementById("input-Prenom").value;
  let userInput2 = document.getElementById("input-Nom").value;
  let userInput3 = document.getElementById("input-email").value;
  userQuery(userInput1, userInput2, userInput3);
}

