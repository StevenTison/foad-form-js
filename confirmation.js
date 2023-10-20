let monObjet = localStorage.getItem("monObjet");

let objet = JSON.parse(monObjet);

const div = document.createElement("div");

const nom = document.createElement("p");
const addNom = document.createTextNode(objet["nom"]);
nom.append(addNom);
div.append(nom);

const prenom = document.createElement("p");
const addPrenom = document.createTextNode(objet["prenom"]);
prenom.append(addPrenom);
div.append(prenom);

const mail = document.createElement("p");
const addMail = document.createTextNode(objet["mail"]);
mail.append(addMail);
div.append(mail);

const mdp = document.createElement("p");
const addMdp = document.createTextNode(objet["mdp"]);
mdp.append(addMdp);
div.append(mdp);

document.body.append(div);