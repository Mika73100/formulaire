//ici je cible le premier groupe de mon html : form-groupe
const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
//ici je cible le deuxième groupe du html : donc les mail de form-groupe
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
//ici le 3ème du html et donc le mdp
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
//ici la confirmation
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');
//ici les images
const allImg = document.querySelectorAll('.icone-verif');
//ici les span 
const allSpan = document.querySelectorAll('span');
//ici les lignes mdp
const allLigne = document.querySelectorAll('.ligne div');


inpUtilisateur.addEventListener('input', (e) => {

    //ici je montre mon icone verte
    if(e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "img/vert.png";
        allSpan[0].style.display = "none";
    }

    //ici je montre mon icone rouge
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "img/rouge.png";
        allSpan[0].style.display = "inline";
    }
})


inpMail.addEventListener('input', (e) => {
    //le e et la => permet de dire qu'il s'agit d'une action annonyme elle n'a pas de nom mais c'est propre a javascript du coup elle est bien reconnu.
    //REGEX ici c'est le tchek pour si la forme de mail est valide ou pas.
    //c'est une expression rationnel
    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail) === 0){
        allImg[1].style.display = "inline";
        allImg[1].src = "img/vert.png";
        allSpan[1].style.display = "none";

    } else if(e.target.value.search(regexEmail) === -1){
        allImg[1].style.display = "inline";
        allImg[1].src = "img/rouge.png";
        allSpan[1].style.display = "inline";
    }
})


//validation et création du MDP

let valeurInp;

//ici je paramettre les caractère spéciaux toléré pour la création de mots de pass
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation ={
    symbole : 0,
    lettre : 0,
    chiffre : 0,
}

inpMdp.addEventListener('input', (e) => {
    valeurInp = e.target.value;

    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(valeurInp.search(alphabet) !== -1){
        objValidation.lettre = 1;
    }
    if(valeurInp.search(chiffres) !== -1){
        objValidation.chiffre = 1;
    }

    //console.log(objValidation);

    if(e.inputType = 'deleteContentBackward'){
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valeurInp.search(alphabet) === -1){
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1){
            objValidation.chiffre = 0;
        }
    }

    //console.log(deleteContentBackward);

    let testAll = 0;
    for(const proprety in objValidation){
        if(objValidation[proprety] > 0){
            testAll++;
        }
    }
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImg[2].style.display = "inline";
        allImg[2].src = "img/rouge.png";
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "img/vert.png";
    }

    // force mdp
    //ici c'est le stade 1 de la force du mdp
    if(valeurInp.length <= 6 && valeurInp.length > 0){
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }

    //ici c'est le stade 2 de la force du mdp
    else if (valeurInp.length >= 6 && valeurInp.length <= 9){
    allLigne[0].style.display = 'block';
    allLigne[1].style.display = 'block';
    allLigne[2].style.display = 'none';
    }

    //ici c'est le stade 3 de la force du mdp
    else if (valeurInp.length > 9){
    allLigne[0].style.display = 'block';
    allLigne[1].style.display = 'block';
    allLigne[2].style.display = 'block';
    }
    else if (valeurInp.length === 0){
        allLigne[0].style.display = 'none';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }

})

//confirmation de MDP


inpConfirme.addEventListener('input', (e) => {

    //j'ai rien dans l'input alors j'envoie une erreur
    if(e.target.value.length === 0){
        allImg[3].style.display = "inline";
        allImg[3].src = "img/rouge.png";
    } 
    // j'envoie la valeur de mon mots de passe du coup je dit que c'est ok
    else if(e.target.value === valeurInp){
        allImg[3].style.display = "inline";
        allImg[3].src = "img/vert.png";
    } else {
        // sinon c'est pas ok
        allImg[3].style.display = "inline";
        allImg[3].src = "img/rouge.png";
    }
})