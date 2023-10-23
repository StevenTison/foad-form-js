let monObjet = localStorage.getItem("monObjet");
let objet = JSON.parse(monObjet);

let maDate = localStorage.getItem("maDate");
let monHeure = localStorage.getItem("monHeure");
let monJour = localStorage.getItem("monJour");

const nom = document.querySelector(".nom");
let addNom = document.createTextNode(objet["nom"]);
nom.append(addNom)

const prenom = document.querySelector(".prenom");
let addPrenom = document.createTextNode(objet["prenom"]);
prenom.append(addPrenom);

const jourSemaine = document.querySelector(".jourSemaine");
const addJourSemaine = document.createTextNode(monJour);
jourSemaine.append(addJourSemaine);

const date = document.querySelector(".jourCo");
const addDate = document.createTextNode(maDate);
date.append(maDate);

const heure = document.querySelector(".heureCo");
const addHeure = document.createTextNode(monHeure);
heure.append(addHeure);