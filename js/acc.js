/*const infoUser = JSON.parse(localStorage.getItem('session'))
const balise = document.querySelector('.userCon')

console.log(infoUser.nom);
balise.innerText = infoUser.nom*/









const infoUser = JSON.parse(localStorage.getItem('session'))
const nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const Adress = document.querySelector('#email')
console.log(infoUser.nom);
nom.innerText =  infoUser.nom
console.log(infoUser.prenom);
prenom.innerText = infoUser.prenom
console.log(infoUser.email);
Adress.innerText = infoUser.email