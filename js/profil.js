
let form = document.querySelector("form")
const infoUser = JSON.parse(localStorage.getItem('session'))


function deconnexion() {
    localStorage.removeItem('session')
    const yy = confirm("voulez-vous vous deconnecter ")
    if (yy) {
        window.location.href = '../index.html'
    }
}


let nomz = document.querySelector(".nom")
let prenomz = document.querySelector(".prenom")
let mqil = document.querySelector(".email")
let heckez = JSON.parse(localStorage.getItem('session'))

heckez.forEach(element => {
    ar = `<p>${element.nom}</p>`
    arr = `<p>${element.prenom}</p>`
    jz = `<p>${element.email}</p>`
    nomz.innerHTML += ar + arr + jz

});


