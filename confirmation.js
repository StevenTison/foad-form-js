let monObjet = localStorage.getItem("monObjet");
let objet = JSON.parse(monObjet);

const email = document.querySelector("#email");
email.value = objet["mail"];

const mdp = document.querySelector("#password");
mdp.value = objet["mdp"];

const form = document.querySelector("#register");

const showError = (input, message) => {
    // prends l'élément form-field
    const formField = input.parentElement;
    // ajoute la classe error
    formField.classList.remove('success');
    formField.classList.add('erreur');

    // montre le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // prends l'élément form-field
    const formField = input.parentElement;

    // enlève la classe error
    formField.classList.remove('erreur');
    formField.classList.add('success');

    // cache le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = '';
};

// constante pour vérifier l'email

const checkEmail = () => {

    let valid = false;

    if (email.value !== objet["mail"]) {
        showError(email, "L'e-mail n'est pas bon.'");
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

// constante pour vérifier le mot de passe

const checkPassword = () => {

    let valid = false;

    if (mdp.value !== objet["mdp"]) {
        showError(mdp, "Le mot de passe n'est pas bon.");
    } else {
        showSuccess(mdp);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', function (e) {
    // check la validité des champs
    let isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();

    let isFormValid = isEmailValid &&
        isPasswordValid;

    let date = new Date();

    let dateCo = date.toLocaleDateString();
    let dateCo2 = date.toLocaleTimeString();
    let dateJour = date.getDay();

    if (dateJour === 0) {
        dateJour = "Dimanche";
        localStorage.setItem("monJour", dateJour);
    } else if (dateJour === 1) {
        dateJour = "Lundi";
        localStorage.setItem("monJour", dateJour);
    } else if (dateJour === 2) {
        dateJour = "Mardi";
        localStorage.setItem("monJour", dateJour);
    } else if (dateJour === 3) {
        dateJour = "Mercredi";
        localStorage.setItem("monJour", dateJour);
    } else if (dateJour === 4) {
        dateJour = "Jeudi";
        localStorage.setItem("monJour", dateJour);
    } else if (dateJour === 5) {
        dateJour = "Vendredi";
        localStorage.setItem("monJour", dateJour);
    } else if (dateJour === 6) {
        dateJour = "Samedi";
        localStorage.setItem("monJour", dateJour);
    }

    localStorage.setItem("maDate", dateCo);
    localStorage.setItem("monHeure", dateCo2);



    // préviens l'envoi du formulaire si il y a une erreur
    if (isFormValid === false) {
        e.preventDefault();
    }
}, true);

