const nomEl = document.querySelector('#nom');
const prenomEl = document.querySelector('#prenom');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirmPassword');

const form = document.querySelector('#register');

form.addEventListener('submit', function (e) {
    // empêche l'envoi
    e.preventDefault();
});

// constante pour vérifier les différents champs

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

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

// constante pour vérifier l'éligibité du nom

const checkNom = () => {
    // ajout d'un booléen et d'un minimum / maximum
    let valid = false;

    const min = 3,
        max = 16;

    const nom = nomEl.value.trim();

    if (!isRequired(nom)) {
        showError(nomEl, 'Vous devez saisir votre nom.');
    } else if (!isBetween(nom.length, min, max)) {
        showError(nomEl, `Votre nom doit contenir entre ${min} et ${max} caractères.`);
    } else {
        showSuccess(nomEl);
        valid = true;
    }
    return valid;
};

// constante pour vérifier l'éligibilité du prénom

const checkPrenom = () => {
    // ajout d'un booléen et d'un minimum / maximum
    let valid = false;

    const min = 3,
        max = 16;

    const prenom = prenomEl.value.trim();

    if (!isRequired(prenom)) {
        showError(prenomEl, 'Vous devez saisir votre prénom.');
    } else if (!isBetween(prenom.length, min, max)) {
        showError(prenomEl, `Votre prénom doit contenir entre ${min} et ${max} caractères.`);
    } else {
        showSuccess(prenomEl);
        valid = true;
    }
    return valid;
};

// constante pour vérifier l'email

const checkEmail = () => {

    let valid = false;

    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Vous devez fournir un e-mail.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'e-mail n'est pas valide.");
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

// constante pour vérifier le mot de passe

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Le mot de passe ne peut pas être vide.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit au moins contenir 8 caractères qui inclus au moins 1 lettre minuscule, 1 lettre majuscule, 1 nombre, et 1 caractère spécial comme (!@#$%^&*).');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

// constante pour vérifier que les mots de passes correspondent

const checkConfirmPassword = () => {

    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();

    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Entrez de nouveau votre mot de passe.');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Les mots de passes ne correspondent pas.');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
};

//  ajout d'un événement pour prévenir l'envoi du formulaire

form.addEventListener('submit', function (e) {
    // préviens l'envoi du formulaire
    e.preventDefault();

    // check la validité des champs
    let isNomValid = checkNom(),
        isPrenomValid = checkPrenom(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isNomValid &&
        isPrenomValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // envoi si le formulaire est valide
    if (isFormValid) {
    }
});

// ajout d'un timer à l'événement input qui va suivre

const debounce = (fn, delay = 300) => {
    let timeoutId;
    return (...args) => {
        // annule le précédent timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup un nouveau timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

// ajout d'un événement qui confirme ou non la validité du champ à chaque input

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'nom':
            checkNom();
            break;
        case 'prenom':
            checkPrenom();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));